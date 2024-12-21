import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Birthday24 from './Pages/Birthday24/Birthday24';

function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/diwali24" element={<About/>} />
        <Route path="/birthday24" element={<Birthday24/>} /> */}
      </Routes>
    </Router>
  );
}

export default Routess;