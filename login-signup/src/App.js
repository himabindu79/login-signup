import React from 'react';
// 1. Import routing components from the library you installed
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

// 2. Import your page components
import LoginSignup from './components/login-signup/Login-Signup';// Corrected path
import Dashboard from './components/Dashboard'; // The new page you created

function App() {
  return (
    // 3. Wrap everything in BrowserRouter
    <BrowserRouter>
      {/* 4. Define the routes */}
      <Routes>
        {/* When the URL is "/", show the LoginSignup page */}
        <Route path="/" element={<LoginSignup />} />
        
        {/* When the URL is "/dashboard", show the Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;