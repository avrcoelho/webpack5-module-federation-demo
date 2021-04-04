import React from "react";
import { Link } from "react-router-dom";

import { useApp } from "baseapplication/AppProvider";

const App = () => {
  const { counter, setCounter } = useApp();

  return (
    <div>
      <h2>Micro 1 App</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
      <br />
      <br />
      <Link to="/app2">App2</Link>
    </div>
  );
};

export default App;
