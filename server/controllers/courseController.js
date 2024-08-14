
const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
    res.send("Getting data");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
