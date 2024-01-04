import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useNbOfRenders } from "./test-query/useNbOfRenders";

function App() {
  const rerender = //TODO
  const nbOfRenders = useNbOfRenders();

  return (
    <div>
      <button onClick={rerender}>rerender</button>
      <p>component has rendered: {nbOfRenders} times</p>
    </div>
  );
}

export default App;
