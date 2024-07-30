import React, { useState, useEffect } from 'react';

// 'npm start' command to run react project

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div class="App">
      <h1>from API: {message}</h1>
      <h2>test</h2>
    </div>
  )
}

export default App;
