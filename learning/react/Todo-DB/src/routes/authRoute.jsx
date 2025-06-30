const express = require("express");
const authenticateToken = require("../middlewares/authenticate");
const {
  signup,
  login,
  current,
  logout,
} = require("../controller/authController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/current", authenticateToken, current);
router.post("/logout", logout);

module.exports = router;
