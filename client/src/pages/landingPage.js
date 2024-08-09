
import React from 'react';
import '../styling/landingPage.css';
//import crimsonhawk from '../pictures/hawk.png';
import iuplogo from '../pictures/iuplogo.png';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
      <img src={iuplogo} alt="iup" />
      <h1>Welcome to Crimson Catalog</h1>
      <h3>Here you can view courses offered at IUP</h3>
      </div>
      <div className="buttons">
        <button onClick={() => window.location.href = '/home'}>View Courses</button>
        <button onClick={() => window.location.href = '/signin'}>Sign In / Sign Up</button>
      </div>
    
    </div>
    
  );
};

export default LandingPage;
