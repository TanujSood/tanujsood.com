import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='Navbar'>
            <a href='/'>
                <h1 className='site-title hover-underline-animation'>Tanuj Sood.</h1>
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
                            <a target='_blank' className="nav-link-end hover-underline-animation" href='https://drive.google.com/file/d/19RHUre_dbSgoSNLuTZCs6rsNkUVzuBLV/view?usp=sharing' rel="noreferrer">
                                Resume
                            </a>
                        </li>
            </ul>
        </nav>
        
    )
}

export default Navbar
