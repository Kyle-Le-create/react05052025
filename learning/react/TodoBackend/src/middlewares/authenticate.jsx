const jwt = require("jsonwebtoken");

const SECRET = process.env.ACCESS_TOKEN_SECRET;

function authenticateToken(req, res, next) {
  const token = req.cookies.token; //  Get token from cookie

  if (!token) {
    return res.status(401).json({ message: "Please log in first" });
  }

  jwt.verify(token, SECRET, (err, payload) => {
    if (err)
      return res.status(403).json({ message: "Token invalid or expired" });
    req.userId = payload.userId;
    next();
  });
}

module.exports = authenticateToken;
