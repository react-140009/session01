import React from "react";
import "./App.css";

function App() {
  let counter = 0;

  const inc = () => {
    console.log(counter, "+");
    counter = counter + 1;
    console.log(counter, "+");
  };
  const dec = () => {
    console.log(counter, "-");
    counter = counter - 1;
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
