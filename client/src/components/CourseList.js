
import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/api';
import CourseItem from './CourseItem';

 const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
        console.log('courses got')
      } catch (error) {
        console.error('Error fetching courses', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <div className="course-table">
      <ul>
        {courses.map(course => (
          <CourseItem key={course._id} course={course} />
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CourseList;
