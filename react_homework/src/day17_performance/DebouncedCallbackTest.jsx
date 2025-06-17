import { ChangeEvent, useEffect, useState, useRef } from "react";

function debounce<F extends (...args: any[]) => any>(func: F, wait: number): F {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  // This is a function that has the same parameters as `func`.
  // It uses a rest parameter syntax `...args` to capture all the passed arguments.
  const debouncedFunction = (...args: Parameters<F>) => {
    // Clear the current timeout, if there is one
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };

  // Return the debounced function cast to the type F
  return debouncedFunction as F;
}

async function apiCall(searchQuery: string) {
  try {
    const response = await fetch(`http://localhost:3001/users?q=${searchQuery}`);
    const data = await response.json();
    console.log("Results:", data); // You can store this in state if needed
  } catch (error) {
    console.error("API error:", error);
  }
}


export default function DebouncedCallback() {
  const [searchTerm, setSearchTerm] = useState("");
 
  const debouncedApiCall = useRef(debounce(apiCall, 500)).current;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // instead of using useDebounce hook, use debounce higher order function
    debouncedApiCall(e.target.value); // now debounced
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
         <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
