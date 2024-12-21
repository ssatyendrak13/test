import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Dashboard/Sidebar';
import Diwali2024 from './Components/Pages/Diwali24/Diwali-2024';
import Birthday24 from './Components/Pages/Birthday24/Birthday24';
import Rotate360 from './Components/Pages/Birthday24/Rotate360';
import LoveSymbols from './Components/Pages/LoveSymbols/LoveSymbols';


function App() {
  return (
    <>
      <div className='hide-screen'>
        <Router 
        basename="/test"
        >
          <Navbar />
          <div className='app'>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diwali24" element={<Diwali2024 />} />
              <Route path="/birthday24" element={<Birthday24 />} />
              <Route path="/rotate360" element={<Rotate360 />} />
              <Route path="/love-symbol" element={<LoveSymbols />} />
            </Routes>
          </div>
        </Router>

      </div>
      <div className='message-to-open flex'>
        <h2>Hi Sonali</h2>
        <h3>Please open it in your laptop!</h3>
      </div>
    </>
  );
}

export default App;
