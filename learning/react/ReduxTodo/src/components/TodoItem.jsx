import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      </label>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>🗑️</button>
    </li>
  );
}

export default TodoItem;
