import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login/customer" element={<Login />} />
        <Route path="/login/agent" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
