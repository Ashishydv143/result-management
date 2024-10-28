// backend/routes/marks.js
const express = require('express');
const router = express.Router();
const Marks = require('../models/Marks'); // Adjust path as necessary

// POST: Add new marks
router.post('/', async (req, res) => {
    const { studentName, attendanceMarks, projectReviewMarks, projectSubmissionMarks, assessmentMarks, linkedinPostMarks } = req.body;

    // Create a new Marks instance
    const newMarks = new Marks({
        studentName,
        attendanceMarks,
        projectReviewMarks,
        projectSubmissionMarks,
        assessmentMarks,
        linkedinPostMarks,
    });

    try {
        const savedMarks = await newMarks.save();
        res.status(201).json(savedMarks); // Send back the saved marks
    } catch (error) {
        console.error("Error adding marks:", error); // Log the error for debugging
        res.status(500).json({ message: "Error adding marks" }); // Send a response back to the client
    }
});


// Get marks by student ID
router.get("/:id", async (req, res) => {
    try {
        console.log("Fetching marks for ID:", req.params.id); // Debug log
        const marks = await Marks.findById(req.params.id);

        if (!marks) {
            return res.status(404).json({ message: "Marks not found" });
        }

        console.log("Fetched marks:", marks); // Log fetched marks
        res.json(marks);
    } catch (error) {
        console.error("Error fetching marks:", error); // Log the error
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
