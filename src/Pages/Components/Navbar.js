import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='Navbar'>
            <a href='/'>
                <h1 className='site-title hover-underline-animation'>Tanuj Sood</h1>
            </a>
            <div className='site-logo'>

            </div>
            <ul className='nav-menu'>
                        <li>
                            <a className="nav-link hover-underline-animation" href='/work'>
                                Work
                            </a>
                            <a className="nav-link hover-underline-animation" href='/about'>
                                About
                            </a>
                            <a target='_blank' className="nav-link-end hover-underline-animation" href='/work/trana'>
                                Resume
                            </a>
                        </li>
            </ul>
        </nav>
        
    )
}

export default Navbar
