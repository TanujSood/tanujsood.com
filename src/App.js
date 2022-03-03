import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import Trana from './Pages/Projects/Trana';
import BharatSim from './Pages/Projects/BharatSim'
import FashionDeli from './Pages/Projects/FashionDeli'
import SpaceFIndr from './Pages/Projects/SpaceFIndr';
import Work from './Pages/Work';
import Navbar from './Pages/Components/Navbar';
import { Layout } from 'antd';

import ReactGa from 'react-ga';

const { Footer } = Layout;

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-217268374-1')
    
    ReactGa.pageview('/')
  }, [])
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />

        {/* Project Pages */}
        <Route path="/work/trana" element={<Trana />} />
        <Route path="/work/fashiondeli" element={<FashionDeli />} />
        <Route path="/work/bharatsim" element={<BharatSim />} />
        <Route path="/work/spacefindr" element={<SpaceFIndr />} />

        {/* 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer style={{ textAlign: 'center' }}> ©2022 Created with ♥ by Tanuj Sood</Footer>
    </Router>
  );
}

export default App;
