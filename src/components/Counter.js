import React, { useState } from "react";

export const PARAM = "test";
export function Counter() {
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
