import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../reducers/todoReducer";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
      />
      <span className={todo.completed ? "todo-item" : ""}>{todo.task}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>🗑️</button>
    </li>
  );
}

export default TodoItem;
