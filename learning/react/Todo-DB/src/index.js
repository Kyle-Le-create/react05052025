require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");

// const { testConnection, initDatabase } = require("./config/database");
const { initDatabase } = require("./database/initiation");

const authRoutes = require("./routes/authRoute");
const todosRoutes = require("./routes/todoRoute");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // to parse JSON request body
app.use(cookieParser()); // to parse cookies from incoming requests

// Routes
app.use("/auth", authRoutes);
app.use("/todos", todosRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Database connection and server startup
const startServer = async () => {
  try {
    // Initialize database tables
    await initDatabase();

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
