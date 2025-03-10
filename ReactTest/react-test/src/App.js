import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './Example1.js';
import Example2 from './Example2.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

//Default

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//Example-1
/* 
function App() {
  const dataToPass = "Hello from Parent!";
  return (
    <div>
      <Example1 message={dataToPass} />
    </div>
  );
} */


//Example-2
/* 
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>List Example</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <Example2 list={list} name="John" />
    </div>

  );
} */


//Example-3
/* 
function handleClick() {
  console.log(document.getElementById("name_input_field").value);
};

function handleChange(event) {
  console.log(event.target.value);
};

function App() {
  return (
    <div>
      <input
        id="name_input_field"
        type="text"
        placeholder="Enter text..."
        onChange={handleChange}
      />
      <button
        onClick={handleClick}>Send Text
      </button>
    </div>
  );
} */


//Example-4

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name="John" />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
