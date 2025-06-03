import { useState } from "react";

function App() {
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("Strength Training");
  const [repetitions, setRepetitions] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goal && repetitions) {
      setGoals([
        ...goals,
        {
          id: Date.now(),
          goal,
          category,
          repetitions,
          achieved: false,
        },
      ]);
      setGoal("");
      setRepetitions("");
    }
  };

  const markAsAchieved = (id) => {
    setGoals(goals.map((g) => (g.id === id ? { ...g, achieved: true } : g)));
  };

  return (
    <div>
      <h2>Fitness Goal Tracker</h2>

      <input
        type="text"
        placeholder="Enter fitness goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Cardio</option>
        <option>Strength Training</option>
        <option>Flexibility</option>
        <option>Endurance</option>
      </select>

      <input
        type="text"
        placeholder="Enter repetitions"
        value={repetitions}
        onChange={(e) => setRepetitions(e.target.value)}
      />

      <button onClick={addGoal}>Add Goal</button>

      <div>
        {goals.map((g) => (
          <div key={g.id}>
            <p>
              {g.goal} - <strong>{g.category}</strong> ({g.repetitions})
            </p>
            <button onClick={() => markAsAchieved(g.id)} disabled={g.achieved}>
              {g.achieved ? "Achieved" : "Mark as Achieved"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
