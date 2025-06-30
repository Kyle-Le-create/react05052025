const express = require("express");

const {
  getUserTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} = require("../controller/todoController");

const authenticateToken = require("../middlewares/authenticate");

const router = express.Router();
router.use(authenticateToken);

router.get("/", getUserTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
