import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import Trana from './Pages/Projects/Trana';
import BharatSim from './Pages/Projects/BharatSim'
import FashionDeli from './Pages/Projects/FashionDeli'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Landing />} />
        <Route path="/about" element={<About />} />

        {/* Project Pages */}
        <Route path="/work/trana" element={<Landing />} />
        <Route path="/work/fashion-deli" element={<Landing />} />
        <Route path="/work/bharat-sim" element={<Landing />} />
        <Route path="/work/spacefindr" element={<Error404 />} />

        {/* 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
