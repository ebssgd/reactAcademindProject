import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import "./index.css";
//import App from "./App";
import App2 from "./App2";
import "./index2.css";

ReactDOM.render(
  <Router>
    <App2 />
  </Router>,
  document.getElementById("root")
);
