// src/components/AdminPanel.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("attendance");
  const [marks, setMarks] = useState({
    studentName: "",
    attendanceMarks: "",
    projectReviewMarks: "",
    projectSubmissionMarks: "",
    assessmentMarks: "",
    linkedinPostMarks: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/marks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(marks),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Marks submitted successfully:", result);

      // Show success toast
      toast.success("Marks submitted successfully!");

      // Optionally reset the form here
      setMarks({
        studentName: "",
        attendanceMarks: "",
        projectReviewMarks: "",
        projectSubmissionMarks: "",
        assessmentMarks: "",
        linkedinPostMarks: "",
      });
    } catch (error) {
      console.error("Error submitting marks:", error);
      // Show error toast if submission fails
      toast.error("Failed to submit marks. Please try again.");
    }
  };

  return (
    <div className="admin-panel">
      <ToastContainer />
      <h1 className="admin-title">Admin Panel</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "attendance" ? "active" : ""}`}
          onClick={() => handleTabChange("attendance")}
        >
          Attendance Marks
        </button>
        <button
          className={`tab-button ${
            activeTab === "projectReview" ? "active" : ""
          }`}
          onClick={() => handleTabChange("projectReview")}
        >
          Project Review Marks
        </button>
        <button
          className={`tab-button ${
            activeTab === "projectSubmission" ? "active" : ""
          }`}
          onClick={() => handleTabChange("projectSubmission")}
        >
          Project Submission Marks
        </button>
        <button
          className={`tab-button ${activeTab === "assessment" ? "active" : ""}`}
          onClick={() => handleTabChange("assessment")}
        >
          Assessment Marks
        </button>
        <button
          className={`tab-button ${activeTab === "linkedin" ? "active" : ""}`}
          onClick={() => handleTabChange("linkedin")}
        >
          LinkedIn Post Marks
        </button>
      </div>

      <div className="tab-content">
        <form onSubmit={handleSubmit} className="marks-form">
          <h2 className="form-title">{activeTab} Marks</h2>
          <input
            type="text"
            name="studentName"
            value={marks.studentName}
            onChange={handleInputChange}
            placeholder="Student Name"
            required
            className="form-input"
          />
          <input
            type="number"
            name="attendanceMarks"
            value={marks.attendanceMarks}
            onChange={handleInputChange}
            placeholder="Attendance Marks"
            required
            className="form-input"
          />
          <input
            type="number"
            name="projectReviewMarks"
            value={marks.projectReviewMarks}
            onChange={handleInputChange}
            placeholder="Project Review Marks"
            required
            className="form-input"
          />
          <input
            type="number"
            name="projectSubmissionMarks"
            value={marks.projectSubmissionMarks}
            onChange={handleInputChange}
            placeholder="Project Submission Marks"
            required
            className="form-input"
          />
          <input
            type="number"
            name="assessmentMarks"
            value={marks.assessmentMarks}
            onChange={handleInputChange}
            placeholder="Assessment Marks"
            required
            className="form-input"
          />
          <input
            type="number"
            name="linkedinPostMarks"
            value={marks.linkedinPostMarks}
            onChange={handleInputChange}
            placeholder="LinkedIn Post Marks"
            required
            className="form-input"
          />
          <button type="submit" className="submit-button">
            Submit All Marks
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
