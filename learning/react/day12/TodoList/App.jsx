import { useState } from "react";

function App() {
  // Todo List state
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Radio group state
  const [gender, setGender] = useState("");

  // Select input age state
  const [age, setAge] = useState("");

  const handleAddOrUpdate = () => {
    if (!input) return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = input;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const handleDelete = (i) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  const handleEdit = (i) => {
    setInput(tasks[i]);
    setEditIndex(i);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <input
        placeholder="add item . . ."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddOrUpdate}>Add</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => handleDelete(i)}>Delete</button>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>Gender </h2>
      {["Female", "Male", "Other"].map((g) => (
        <label key={g}>
          <input
            type="radio"
            name="gender"
            value={g}
            checked={gender === g}
            onChange={(e) => setGender(e.target.value)}
          />
          {g}
        </label>
      ))}

      <hr />

      <h2>Select Age</h2>
      <label>
        Age
        <select value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Select Age</option>
          <option value="Ten">Ten</option>
          <option value="Twenty">Twenty</option>
          <option value="Thirty">Thirty</option>
        </select>
      </label>
    </div>
  );
}

export default App;
