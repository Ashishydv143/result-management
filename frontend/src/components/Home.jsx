// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Student Result Management System</h1>
        <p className="home-description">
          Welcome to the Student Result Management System. Manage student
          records, view results, and much more with ease.
        </p>

        <div className="home-button-group">
          <Link to="/student" className="home-button view-results">
            View Results
          </Link>

          <Link to="/admin" className="home-button add-result">
            Add New Result for Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
