import logo from './logo.svg';
import './App.css';

function App() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let isLoggedIn = true;

  return (
    <div className="App">
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{loggedIn(isLoggedIn)}</p>
    </div>
  );
}

function loggedIn(isLoggedIn) {
  if (isLoggedIn){
    return "Welcome back!";
  }
  else {
    return "Please Log in"
  }
}


export default App;
