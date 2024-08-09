
import React from 'react';
import '../styling/landingPage.css';
import Header from '../components/header';
import LeftSidebar from '../components/leftSidebar';
import CourseList from '../components/CourseList';

const LandingPage = () => {

    return (
        <div className="catalog">
            <Header />
            <LeftSidebar />
            <CourseList />
            <h1>WIP</h1>
        </div>
    );


};

export default LandingPage;