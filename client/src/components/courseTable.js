
import React from 'react';
//<p>{course.description}</p>
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
         

const CourseItem = ({ course }) => (
  <div className="dataTable">
    <DataTable value={ course} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="course.prefix" header="Name" style={{ width: '25%' }}></Column>
    <Column field="course.course_number" header="Country" style={{ width: '25%' }}></Column>
    </DataTable>
  </div>
);

export default CourseItem;

