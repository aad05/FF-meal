import React from "react";
import ReactDOM from "react-dom";
import MainContext from "./context";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <App />
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);
