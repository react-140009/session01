// Hook
import React, { useState } from "react";
import "./App.css";

function App() {
  console.log("<<<<<<<");
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  const inc = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  const dec = () => {
    console.log(counter);
    setCounter(counter - 1);
  };
  const toggle = () => {
    console.log(showCounter);
    showCounter = !showCounter;
  };

  return (
    <div>
      <button onClick={toggle}>Toggle Counter</button>
      {showCounter ? (
        <div style={{ display: "flex", margin: "auto" }}>
          <button onClick={inc}>➕</button>
          {counter}
          <button onClick={dec}>➖</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
