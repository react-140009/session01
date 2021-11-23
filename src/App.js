import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // JSX - JavaScript XML
  // let Div = React.createElement('div', {className: 'APP'},
  // React.createElement('header', {className: 'App-header'})
  // )
  // class -> className
  // tag -> close

  const msg = "سلام دنیا 💃💃💃";

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: "blue" }}>{msg}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default App;
