import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'


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
      <p>{Home("Home Page", "Welcome to our website.")}</p>
      <p>{About("About Us", "We are passionate about delivering quality experiences.")}</p>
      <p>{Contact("Contact Us", "Feel free to reach out to us via email or phone.")}</p>

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
