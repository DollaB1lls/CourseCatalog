
const express = require('express');
const { getAllCourses } = require('../controller/courseController');

const courseRoute = express.Router();

courseRoute.get("/getAllCourses", getAllCourses)


module.exports = courseRoute;

