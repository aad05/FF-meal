import React from "react";
import ReactDOM from "react-dom";
import MainContext from "./context";
import "./index.css";
import Root from "./root";

ReactDOM.render(
  <React.StrictMode>
    <MainContext>
      <Root />
    </MainContext>
  </React.StrictMode>,
  document.getElementById("root")
);
