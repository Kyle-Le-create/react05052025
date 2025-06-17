import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoThunk } from "../redux/reducers/todoReducer";

function TodoForm() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && description.trim()) {
      dispatch(addTodoThunk({ task, description }));
      setTask("");
      setDescription("");
    } else {
      alert("Please enter both task name and a description.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task..."
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description..."
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
}
export default TodoForm;
