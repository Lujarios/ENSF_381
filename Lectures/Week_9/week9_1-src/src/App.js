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


//Example-1
/*
import Example1 from './Example1.js';
function App() {
  return(
  <div>
    <h1>useState() Example</h1>
    <hr />
    <Example1 />
  </div>
  );
}
*/

//Example-2
/*
import React, { useState }  from 'react';

function App() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>useState() Example</h1>
      <hr />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
*/

//Example-3
/*
import React, { useState }  from 'react';

function App() {
  // Declare a state variable to track the visibility of details
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div>
      <h2>Toggle Details</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div>
          <p>This is additional information that can be toggled.</p>
        </div>
        )
      }
    </div>
  );
}
*/

//Example-4
/*
import Example4 from './Example4.js';
function App() {
  return(
  <div>
    <h1>useState() Example</h1>
    <hr />
    <Example4 />
  </div>
  );
}
*/

//Example-5
/*
import Example5 from './Example5.js';
import {React, createContext} from 'react';

export const ThemeContext = createContext(null);

function App () {
  const theme = 'dark'; 
  return (
    <ThemeContext.Provider value={{theme}}>
      <Example5 />
    </ThemeContext.Provider>
  );
};
*/

//Example-6
/*
import Example5 from './Example5.js';
import {React, createContext, useState} from 'react';

export const ThemeContext = createContext(null);

function App () {

  const [theme, setTheme] = useState('light');
  function toggleTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <ThemeContext.Provider value={{theme}}>
        <Example5 />
      </ThemeContext.Provider>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
*/

export default App;
