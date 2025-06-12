import React, { useRef, useState } from "react";

// 1. can get a ref to a dom's elements and use the DOM api related to the element: scroll, focus, style, position, etc
// 2. you want to keep some value across the renders / let some value survive the rerenders

export default function Ref() {
  const [count, setCount] = useState(0);

  const inputRef = useRef < HTMLInputElement > null;

  const countRef = useRef(0);

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          //   console.log(inputRef.current);
          console.log(inputRef.current?.getClientRects());
        }}
      >
        Focus on
      </button>
      <div>Current Count: {count} </div>
      <button
        onClick={() => {
          //   countRef.current++;
          setCount((prev) => prev + 1);
          countRef.current++;
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          console.log(countRef.current);
        }}
      >
        Show # of times component rerendered
      </button>
    </div>
  );
}
