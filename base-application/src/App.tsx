import React from "react";

import { AppProvider } from "./AppProvider";
import Routes from "./routes";

const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

export default App;
