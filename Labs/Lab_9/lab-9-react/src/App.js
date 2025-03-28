import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import PredictorPage from './pages/PredictorPage';

// Homepage
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/predict" element={<PredictorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
