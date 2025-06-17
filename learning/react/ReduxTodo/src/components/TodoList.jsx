import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodosThunk } from "../redux/reducers/todoReducer";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
  const todos = useSelector((state) => state.todos.todosList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />

      <div className="items-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
