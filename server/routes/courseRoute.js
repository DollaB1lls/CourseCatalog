
const express = require('express');
const { getAllCourses, getCourseByNum } = require('../controller/courseController');

const courseRoute = express.Router();

courseRoute.get("/getAllCourses", getAllCourses)
courseRoute.get("/getCourse/:course_number", getCourseByNum)


module.exports = courseRoute;

