import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        {/* Define more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
