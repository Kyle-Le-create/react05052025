const shortid = require("shortid");
const { pool } = require("../database/connection");

// GET all todos for current user
const getUserTodos = async (req, res) => {
  try {
    const [todos] = await pool.execute(
      "SELECT * FROM todos WHERE user_id = ?",
      [req.userId]
    );

    res.status(200).json({
      message: "Todos fetched",
      todos: todos,
      count: todos.length,
    });
  } catch (error) {
    console.error("Get todos error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET todo by ID
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const [todos] = await pool.execute("SELECT * FROM todos WHERE id = ?", [
      id,
    ]);

    if (todos.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const todo = todos[0];
    if (todo.user_id !== req.userId) {
      return res.status(403).json({ message: "Access not allowed" });
    }

    res.status(200).json({ message: "Todo fetched", todo });
  } catch (error) {
    console.error("Get todo by ID error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST a new todo for current user
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required!" });
    }

    const todoId = shortid.generate();

    await pool.execute(
      "INSERT INTO todos (id, user_id, title, completed) VALUES (?, ?, ?, ?)",
      [todoId, req.userId, title.trim(), false]
    );

    // Fetch the created todo to return it
    const [todos] = await pool.execute("SELECT * FROM todos WHERE id = ?", [
      todoId,
    ]);

    res.status(201).json({ message: "Todo created", todo: todos[0] });
  } catch (error) {
    console.error("Create todo error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT update a todo by ID for current user, if todo not belongs to current user will be forbidden
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const [todos] = await pool.execute("SELECT * FROM todos WHERE id = ?", [
      id,
    ]);

    if (todos.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const todo = todos[0];
    if (todo.user_id !== req.userId) {
      return res.status(403).json({ message: "Access not allowed" });
    }

    const newTitle = title !== undefined ? title : todo.title;
    const newCompleted =
      typeof completed === "boolean" ? completed : todo.completed;

    await pool.execute(
      `UPDATE todos SET title = ?, completed = ? WHERE id = ?`,
      [newTitle, newCompleted, id]
    );

    const [updatedTodos] = await pool.execute(
      "SELECT * FROM todos WHERE id = ?",
      [id]
    );

    res
      .status(200)
      .json({ message: "Todo updated successfully", todo: updatedTodos[0] });
  } catch (error) {
    console.error("Update todo error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE a todo by ID for current user, if todo not belongs to current user will be forbidden
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // First, check if todo exists and belongs to user
    const [todos] = await pool.execute("SELECT * FROM todos WHERE id = ?", [
      id,
    ]);

    if (todos.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    const todo = todos[0];
    if (todo.user_id !== req.userId) {
      return res.status(403).json({ message: "Access not allowed" });
    }

    // Delete the todo
    await pool.execute("DELETE FROM todos WHERE id = ?", [id]);

    res.status(200).json({ message: "Todo deleted", todo });
  } catch (error) {
    console.error("Delete todo error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUserTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
