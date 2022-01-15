import React from 'react'
import Spread from '../Components/Assets/SpaceFindr/SpaceFindr.png'
import './SpaceFindr.css'

function SpaceFIndr() {
    return (
        <div>
            <div className='spread'>
                <img className="header-image" src={Spread} alt="SpaceFindr-Background"></img>
            </div>
            <div className='spc-master'>
                <h1 className='spc-subtitle'>Work In Progress...</h1>
            </div>
        </div>
    )
}

export default SpaceFIndr
