const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    prefix: String,
    course_number: String,
    course_name: String,
    description: String,
});

module.exports = mongoose.model("cosccourses", courseSchema);