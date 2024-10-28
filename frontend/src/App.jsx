// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AdminPanel from "./components/AdminPanel";
import StudentPanel from "./components/StudentPanel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/student" element={<StudentPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
