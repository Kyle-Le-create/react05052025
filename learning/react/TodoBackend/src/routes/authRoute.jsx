const express = require("express");
const shortId = require("shortid");
const generateToken = require("../utils/jwt");
const { encryptPassword, comparePassword } = require("../utils/password");
const authenticateToken = require("../middlewares/authenticate");

const router = express.Router();
const users = [];

//signup
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const existing = users.find((user) => user.username === username);
  if (existing) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const hashedPassword = await encryptPassword(password);
  const newUser = {
    id: shortId.generate(),
    username,
    password: hashedPassword,
  };
  users.push(newUser);
  res.status(201).json({ message: `Signup successful ${username}` });
});

//login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken(user.id);

  //send it as an http-only cookie, no need to manually paste token in header
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 360000,
  });

  res.status(200).json({ message: "Login successful" });
  // res.status(200).json({ message:"Login successful",token });
});

//get current user info
router.get("/current", authenticateToken, async (req, res) => {
  const user = users.find((user) => user.id === req.userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  res
    .status(200)
    .json({ message: "Welcome!", id: user.id, username: user.username });
});

//logout
router.post("/logout", async (req, res) => {
  //clear the cookie named "token"
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
