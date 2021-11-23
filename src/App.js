// Hook
import React, { useState } from "react";
import "./App.css";

const test = 1;
function Counter() {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    console.log(counter);
    setCounter(counter + 1);
  };
  const dec = () => {
    console.log(counter);
    setCounter(counter - 1);
  };

  return (
    <div style={{ display: "flex", margin: "auto" }}>
      <button onClick={inc}>➕</button>
      {counter}
      <button onClick={dec}>➖</button>
    </div>
  );
}

function App() {
  console.log("<<<<<<<");
  const [showCounter, setShowCounter] = useState(true);
  const toggle = () => {
    console.log(showCounter);
    setShowCounter(!showCounter);
  };

  return (
    <div>
      <button onClick={toggle}>Toggle Counter</button>
      {showCounter ? <Counter /> : null}
      <Counter style={{ display: showCounter ? "block" : "none" }} />
    </div>
  );
}

export default App;
