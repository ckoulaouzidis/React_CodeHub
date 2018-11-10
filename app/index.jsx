import React from "react";
import ReactDOM from "react-dom";
import BrowserRouter from "./containers/BrowserRouter"; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <BrowserRouter/>
  </Router>,
  document.getElementById("app")
);