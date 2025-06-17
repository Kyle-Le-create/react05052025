import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`body-${theme}`);
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
