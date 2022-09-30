import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import AuthContext, { AuthContextProvider } from "./Store/Auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
