import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';


// Homepage
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
