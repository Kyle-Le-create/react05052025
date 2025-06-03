import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        disabled={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Disabled" : "Hover to Disable Me"}
      </button>

      <br />
      <br />

      <button onClick={() => setShowText((prev) => !prev)}>
        {showText ? "Hide" : "Show"} Paragraph
      </button>

      {showText && <p>This is a paragraph that can be toggled.</p>}
    </div>
  );
}

export default App;
