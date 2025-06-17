import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTodoThunk,
  deleteTodoThunk,
  fetchSingleTodoThunk,
} from "../redux/reducers/todoReducer";

function TodoDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todos.currentTodo);

  const [form, setForm] = useState({
    task: "",
    description: "",
  });

  useEffect(() => {
    dispatch(fetchSingleTodoThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (todo) {
      setForm({
        task: todo.task,
        description: todo.description,
        completed: todo.completed,
      });
    }
  }, [todo]);

  const handleUpdate = async () => {
    const updatedTodo = {
      ...form,
      date: todo.date,
    };
    dispatch(updateTodoThunk(todo.id, updatedTodo));
    navigate("/");
  };

  const handleDelete = async () => {
    dispatch(deleteTodoThunk(id));
    navigate("/");
  };

  const handleCompletedChange = (e) => {
    const updatedCompleted = e.target.checked;
    setForm({ ...form, completed: updatedCompleted });
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <div>
      <h1>Todo Details</h1>
      <form>
        <label>
          <strong>ID:</strong> {todo.id}
        </label>
        <label>
          <strong>Date:</strong> {todo.date}
        </label>
        <label>
          <strong>Task:</strong>
          <input
            value={form.task}
            onChange={(e) => setForm({ ...form, task: e.target.value })}
          />
        </label>

        <label>
          <strong>Description:</strong>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </label>

        <label>
          <strong>Completed:</strong>
          <input
            type="checkbox"
            checked={form.completed}
            onChange={handleCompletedChange}
          />
        </label>
      </form>
      <div>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    </div>
  );
}

export default TodoDetails;
