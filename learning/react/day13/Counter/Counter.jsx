import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useState(null);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>

      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
