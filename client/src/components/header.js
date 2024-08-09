
// Header.js
import React from 'react';
import iuplogo from '../pictures/iuplogo.png';
import '../styling/header.css';

const Header = () => {
  return (
    <header className="headerCom">
      <div className="logo">
        <a href="/home"><img src={iuplogo} alt="iup" height="50px" /></a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <div className="user-profile">
        <a href="/profile">USER</a>
      </div>
    </header>
  );
};

export default Header;

