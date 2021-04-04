import React from "react";

import { useApp } from "baseapplication/AppProvider";
import { Link } from "react-router-dom";

const App2 = () => {
  const { counter, setCounter } = useApp();

  return (
    <div>
      <h2>Micro 1 App2</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
      <br />
      <br />
      <Link to="/">App1</Link>
    </div>
  );
};

export default App2;
