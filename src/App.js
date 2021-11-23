// Hook
import React, { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

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
