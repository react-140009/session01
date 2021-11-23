// Hook
import React, { useState } from "react";
import "./App.css";

function App() {
  // [number, React.Dispatch<React.SetStateAction<number>>]
  const state = useState(0);

  const inc = () => {
    console.log(state[0], "+");
    state[1](state[0] + 1);
    console.log(state[0], "+");
  };
  const dec = () => {
    console.log(state[0], "-");
    state[1](state[0] - 1);
    console.log(state[0], "-");
  };

  return (
    <div style={{ display: "flex", margin: "auto" }}>
      <button onClick={inc}>➕</button>
      {state[0]}
      <button onClick={dec}>➖</button>
    </div>
  );
}

export default App;
