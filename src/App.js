import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Modal from "./Components/Modal/Modal";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/"  exact component={Home} />
        <Route path="/modal" component={Modal} />
      </Router>
    </div>
  );
}

export default App;
