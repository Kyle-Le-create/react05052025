const shortId = require("shortid");
const generateToken = require("../utils/jwt");
const { encryptPassword, comparePassword } = require("../utils/password");
const { pool } = require("../database/connection");

// Sign Up
const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // check if user already exists
    const [existing] = await pool.execute(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await encryptPassword(password);
    const userId = shortId.generate();

    // insert new user
    await pool.execute(
      "INSERT INTO users (id, username, password) VALUES (?,?,?)",
      [userId, username, hashedPassword]
    );

    res.status(201).json({
      message: `Signup successful ${username}`,
      userId,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    // Find user by username
    const [users] = await pool.execute(
      "SELECT id, username, password FROM users WHERE username = ?",
      [username]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    // Check password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user.id);

    // Send it as an http-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 600000, // 10 minutes
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get Current User
const current = async (req, res) => {
  try {
    const [users] = await pool.execute(
      "SELECT id, username FROM users WHERE id = ?",
      [req.userId]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = users[0];
    res.status(200).json({
      message: "Welcome!",
      id: user.id,
      username: user.username,
    });
  } catch (error) {
    console.error("Current user error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Logout

const logout = async (req, res) => {
  try {
    // Clear the cookie named "token"
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signup,
  login,
  current,
  logout,
};
