import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <div className="card">
        <button onClick={decrement}>-</button>
        <span
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          {count}
        </span>

        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
