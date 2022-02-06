import React from 'react'
import './Case.css'
import './BharatSim.css'
import { Row, Col, Divider } from 'antd'
import Spread from '../Components/Assets/BharatSim/BharatSimSpread.png';

const style = { padding: '8px 0' };

function FashionDeli() {
    return (
        <div>
            <div className='spread'>
                <img className="header-image" src={Spread} alt="Trana-Background"></img>
            </div>
            <div className='trana-master'>
                <div>
                    <h1 className='main-subtitle'>Making Researchers' Lives Easier!</h1>
                </div>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <h3 className='roles'>CATEGORY</h3>
                                <h3>Capstone Project</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <h3 className='roles'>TEAM</h3>
                                <h3>Tanuj Sood</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <h3 className='roles'>DURATION</h3>
                                <h3>August 2021 - December 2021</h3>
                            </div>
                        </Col>
                    </Row>
                <Divider className='divider' />
            </div>

            <div className='content-master'>
                <div className='section'>
                    <h2 className='bs-heading'>OVERVIEW</h2>
                    <h2 className='caption'>The Task</h2>
                    <p className='paragraph'>BharatSim is a distributed, multi-scale agent-based model simulation framework for the scientific community, funded by The Bill and Melinda Gates Foundation. Currently, it can be used by researchers familiar with Java and Scala in order to be able to customize and use the system. Since BharatSim aims to be an accessible system for interested researchers, the current learning curve required is counter-intuitive.</p>
                    <p className='paragraph'>Hence, for my Capstone Project, I was tasked with researching and finding out a way tp lower the learning curve and make the system easier to pick up for users.</p>
                </div>
            </div>
        </div>
    )
}

export default FashionDeli
