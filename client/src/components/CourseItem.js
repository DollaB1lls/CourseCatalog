
import React from 'react';

const CourseItem = ({ course }) => (
  <div className = "courses">
  <li>
    <h2>
      {course.prefix} {course.course_number}: {course.course_name}
    </h2>
    <p>{course.description}</p>
  </li>
  </div>
);

export default CourseItem;
