import React from 'react'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Contact from './Components/Contact'


import '../App.css';



function Landing() {
    return (
        <div className='App'>
            <Header />
            <Projects />
            <Contact />
        </div>
    )
}

export default Landing
