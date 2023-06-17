import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Investment Banking and Private Equity Club</h1>
      <h1>at Rhodes College</h1>
      <div className="card">
        <p className="read-the-docs">Click me!</p>
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
    </div>
  );
}

export default App;
