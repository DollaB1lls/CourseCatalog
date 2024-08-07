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

const getCourseByNum = async (req, res) => {
    try {
        const course_number = req.params.course_number;
        const courseExist = await Course.findOne({ course_number });
        if(!courseExist){
            return res.status(404).json({message: "course not found"});
        }
        res.status(200).json(courseExist);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "server error"});
    }
}

module.exports = { getAllCourses, getCourseByNum };