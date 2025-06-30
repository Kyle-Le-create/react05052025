const { pool } = require("./connection");
const todoModel = require("./models/todo.model");
const userModel = require("./models/user.model");

const initDatabase = async () => {
  try {
    const createUsersTableSQL = userModel.createTable();
    const createTodosTableSQL = todoModel.createTable();

    // Create Users table first (due to foreign key dependency)
    await pool.execute(createUsersTableSQL);
    // console.log("Users table created/verified");

    // Create Todos table
    await pool.execute(createTodosTableSQL);
    // console.log("Todos table created/verified");

    console.log("Database initialized successfully");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

module.exports = { initDatabase };
