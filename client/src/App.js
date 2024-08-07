//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import './App.css';
import React, { useState, useEffect } from 'react';

// 'npm start' command to run react project

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('/getCourses')
//       .then((res) => res.text())
//       .then((data) => setMessage(data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <p>{message}</p>
//         <Routes>
//           <Route path="/" exact component={CoursesPage} />
//           </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/getCourses')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div class="App-header">
      <h1>from API: {message['prefix']}</h1>
      <h2>test</h2>
    </div>
  )
}

export default App;
