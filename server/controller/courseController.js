const Course = require('../model/courseModel');

const getAllCourses = async (req, res ) => {
    try {
        const courseData = await Course.find();
        if(!courseData || courseData.length === 0){
            return res.status(404).json({messsage: "no data found"});
        }
        res.status(200).json(courseData);
    } catch (error) {
        res.status(500).json({message: "server error"});
    }
}

module.exports = { getAllCourses };