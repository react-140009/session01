// Hook
import React, { useState } from "react";
import "./App.css";

function App() {
  // [number, React.Dispatch<React.SetStateAction<number>>]
  const [counter, setCounter] = useState(0);
  // destructor [], {}

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
