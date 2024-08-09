
import React from 'react';
import '../styling/global.css'
import '../styling/leftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
    <button className="sidebar-btn" onClick={() => window.location.href = '/catalog'}>Catalog</button>
    <button className="sidebar-btn" onClick={() => window.location.href = '/'}>Calendar</button>
    <button className="sidebar-btn" onClick={() => window.location.href = '/'}>Notifications</button>

</div>

   
  );
};

export default LeftSidebar;
