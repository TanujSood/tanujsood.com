import React from 'react'
import './Navbar.css'

const Menu = [
    {
        title: 'Work',
        url: '#',
        cName: 'nav-link hover-underline-animation'
    },
    {
        title: 'About',
        url: '#',
        cName: 'nav-link hover-underline-animation'
    },
    {
        title: 'Resume',
        url: 'https://drive.google.com/file/d/1A5SgUkHYqk4XHiAoYIsd-I4T_UkhN2bd/view?usp=sharing',
        cName: 'nav-link hover-underline-animation'
    }
]

function Navbar() {
    return (
        <nav className='Navbar'>
            <h1 className='site-title hover-underline-animation'>Tanuj Sood</h1>
            <div className='site-logo'>

            </div>
            <ul className='nav-menu'>
                {Menu.map((item, index) => {
                    return (
                        <li>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
        </nav>
        
    )
}

export default Navbar
