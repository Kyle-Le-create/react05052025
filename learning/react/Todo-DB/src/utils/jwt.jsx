const jwt = require("jsonwebtoken");

const SECRET = process.env.ACCESS_TOKEN_SECRET;

const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET, { expiresIn: "10m" });
};

module.exports = generateToken;
