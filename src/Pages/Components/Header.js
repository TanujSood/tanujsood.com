import React from 'react'
import './Header.css'
import 'antd/dist/antd.min.css'
import Avatar from '../Components/Assets/Avatar.png'

function Header() {
    return (
        <div className='header-layout'>
            <div className='content'>
                <div className='avatar'><img className='avatar-icon' src={Avatar} alt='avatar'></img></div>
                <h1 className='title'>Hi, I am Tanuj Sood!</h1>
                <h3 className='main-caption'>An Aspiring Product Designer passionate about building meaningful<br />virtual experiences that enhance our interactions with the real world.</h3>          
            </div>
            
        </div>
    )
}

export default Header
