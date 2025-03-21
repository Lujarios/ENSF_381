import logo from './logo.svg';
import './App.css';

//Default
/* 
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
} */


//Example-1
/* 
import Example1 from './Example1.js';
function App() {
  return (
    <div>
      <Example1 />
    </div>
  );
}; */


//Example-2 (Inline Styling)
/* 
import React from 'react';
function App() {
  return (
    <div>
      <p style={{ color: 'navy', fontSize: '48px' }}>Hello, Inline Styling!</p>
    </div>
  );
}; */


//Example-3 (Inline Styling as JS Objects)
/* 
import React from 'react';

function App() {
  // Inline styles as JavaScript objects
  const componentStyles = {
    backgroundColor: '#8effb0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };
  const titleStyles = {
    color: 'brown',
    fontSize: '24px',
  };
  const descriptionStyles = {
    color: '#3e3e3e',
    fontSize: '16px',
    marginTop: '10px',
  };

  return (
    <div style={componentStyles}>
      <h1 style={titleStyles}>Styled React Component</h1>
      <h2 style={descriptionStyles}>This component is styled using inline styles.</h2>
    </div>
  );
};
 */

//Example-4
/* 
import React from 'react';
import styled from 'styled-components';

// Create a styled component using the styled() function
const StyledDiv = styled.div`
background-color: lightyellow;
padding: 10px;
margin: 5px;
border: 2px solid blue;
text-align: center;
`;
const StyledText = styled.p`
color: darkgreen;
font-size: 36px;
`;

function App() {
  return (
    <StyledDiv>
      <StyledText>This component is styled using CSS Modules.</StyledText>
    </StyledDiv>
  );
}; */


export default App;
