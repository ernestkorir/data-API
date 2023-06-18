import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import NavBar from './components/Navbar';
import './App.css';
import CompanyProfile from './components/CompanyProfile';

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:name" element={<CompanyProfile />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
