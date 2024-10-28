import React, { useState } from "react";
import "./StudentPanel.css"; // Import the CSS file

const StudentPanel = () => {
  const [studentId, setStudentId] = useState("");
  const [marks, setMarks] = useState(null);
  const [error, setError] = useState(null);

  const fetchMarks = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/marks/${studentId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch marks");
      }
      const data = await response.json();
      setMarks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMarks(null);
    }
  };

  return (
    <div className="student-panel">
      <h1>Student Panel</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your unique ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="input-field"
        />
        <button onClick={fetchMarks} className="fetch-button">
          Fetch Marks
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      {marks && (
        <div className="marks-container">
          <h2>Marks:</h2>
          <p className="mark-item">Attendance Marks: {marks.attendanceMarks}</p>
          <p className="mark-item">
            Project Review Marks: {marks.projectReviewMarks}
          </p>
          <p className="mark-item">
            Project Submission Marks: {marks.projectSubmissionMarks}
          </p>
          <p className="mark-item">Assessment Marks: {marks.assessmentMarks}</p>
          <p className="mark-item">
            LinkedIn Post Marks: {marks.linkedinPostMarks}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentPanel;
