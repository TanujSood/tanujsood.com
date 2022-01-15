import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Layout } from 'antd';

import '../App.css';


const { Footer } = Layout;

function Landing() {
    return (
        <div className='App'>
            <Navbar />
            <Header />
            <Projects />
            <Contact />
            <Footer style={{ textAlign: 'center' }}> ©2022 Created with ♥ by Tanuj Sood</Footer>
        </div>
    )
}

export default Landing
