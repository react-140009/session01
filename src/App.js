// Hook
import React, { useState } from "react";
import "./App.css";

function App() {
  // [number, React.Dispatch<React.SetStateAction<number>>]
  const state = useState(0);
  const counter = state[0];
  const setCounter = state[1];
  // destructor

  const inc = () => {
    console.log(counter, "+");
    setCounter(counter + 1);
    console.log(counter, "+");
  };
  const dec = () => {
    console.log(counter, "-");
    setCounter(counter - 1);
    console.log(counter, "-");
  };

  return (
    <div style={{ display: "flex", margin: "auto" }}>
      <button onClick={inc}>➕</button>
      {counter}
      <button onClick={dec}>➖</button>
    </div>
  );
}

export default App;
