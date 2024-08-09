
// Header.js
import React from 'react';
import '../styling/header.css';
import iuplogo from '../pictures/iuplogo.png'


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <a href="/home"><img src={iuplogo} alt="iup" height="50px"/></a>
      </div>
      <nav className="nav">
        <ul>
            
        </ul>
      </nav>
      <div className="user-profile">
        <a href="/profile">USER</a> {/* Replace with user profile link */}
      </div>
    </header>
  );
};

export default Header;
