// backend/models/Marks.js
const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    attendanceMarks: { type: Number, required: true },
    projectReviewMarks: { type: Number, required: true },
    projectSubmissionMarks: { type: Number, required: true },
    assessmentMarks: { type: Number, required: true },
    linkedinPostMarks: { type: Number, required: true },
});

const Marks = mongoose.model('Marks', marksSchema);
module.exports = Marks;
