import './styling/App.css';
import './styling/global.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import HomePage from './pages/homePage';
import SignInPage from './pages/signInPage';
import LandingPage from './pages/landingPage';
import CourseCatalog from './pages/courseCatalog'

// 'npm start' command to run react project

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/catalog" element={<CourseCatalog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


