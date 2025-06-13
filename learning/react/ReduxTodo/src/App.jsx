import { useSelector } from "react-redux";
import "./styles.css";
import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = `body-${theme}`;
  }, [theme]);

  return (
    <div className="App">
      <h1 className="title">Todo List</h1>
      <TodoForm />
      <ThemeToggle />
      <TodoList />
    </div>
  );
}

export default App;
