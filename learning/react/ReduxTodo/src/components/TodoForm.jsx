import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todoReducer";

function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      inputRef.current.focus();
      return;
    }
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default TodoForm;
