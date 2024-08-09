
import React from 'react';
//<p>{course.description}</p>

const CourseItem = ({ course }) => (
  <div className = "courses">
  <ul>
    <h2>
      {course.prefix} {course.course_number}: {course.course_name}
    </h2>
    
  </ul>
  </div>
);

export default CourseItem;
