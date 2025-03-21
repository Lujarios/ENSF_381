import logo from './logo.svg';
import './App.css';

//Default

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


//Example
/*
import React, { useState, useEffect } from 'react';
function App() {
  const [theme, setTheme] = useState('light'); 
  
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); 
    setTheme(savedTheme ? savedTheme : 'No Theme'); 
  }, []); 

  /*
  useEffect(() => {
    localStorage.removeItem('theme'); 
  }, [theme]);*/

  /*
  function clearStorage()
  {
    localStorage.clear(); 
  }*/
  /*
  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
*/

export default App;
