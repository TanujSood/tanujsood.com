import React from 'react'
import './Case.css'
import './BharatSim.css'
import { Row, Col, Divider } from 'antd'
import Spread from '../Components/Assets/BharatSim/BharatSimSpread.png';
import Principles from '../Components/Assets/BharatSim/Principles.png'
import Timeline from '../Components/Assets/BharatSim/Timeline.png'
import Quotes from '../Components/Assets/BharatSim/Quotes.png'
import Personas from '../Components/Assets/BharatSim/Personas.png'


const style = { padding: '8px 0' };

function BharatSim() {
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
                                <h3>August '21 - January '22</h3>
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
                <div className='section'>
                    <h2 className='bs-heading'>DESIGN PROCESS</h2>
                    <h2 className='caption'>The Approach</h2>
                    <p className='paragraph'>In order to solve this issue, I wanted to keep fundamental principles in mind each step of the way. Making a list of what I wanted to achieve through this project, four core ideas were chosen using a priority list.</p>
                    <img className='figures' src={Principles} alt='Principles'></img>
                    <p className='paragraph'>Using these ideas, I was ready to build a tentative timeline and to create abstractions for each step of the process to give justice to every single method.</p>
                    <img className='figures' src={Timeline} alt='Timeline'></img>
                    <p className='paragraph'>After hours of brainstorming with professor, I could finally move on to learn more about my target audience, the researcher.</p>
                </div>
                <div className='section'>
                    <h2 className='bs-heading'>USER RESEARCH</h2>
                    <h2 className='caption'>Collecting Wishes...</h2>
                    <p className='paragraph'>In order to get reliable data from users, I chose to employ the use of quantitative and qualitative measures to gather information. Using a variety of tools such as online surveys and in-person interviews, I spent a month with researchers of all levels, ranging from amateurs to veterans.</p>
                    <div className='quote-div'><img className='quotes-figure' src={Quotes} alt='Quotes'></img></div>
                    <p className='paragraph'>Asking them questions about how they felt when using the current system while gauging their expectations, I was able to extract three key points that were prevalent in all use cases. These were</p>
                    <ul className='list'>
                        <li>
                            <p className='paragraph'>Many new researchers wanted to <span className='bharatsim-hl'>run pre-existing models</span> on BharatSim and use the interface to tweak parameters and discover changes in order to get a feel of the engine.</p>
                        </li>
                        <li>
                            <p className='paragraph'>Regular users wanted to use this tool in order to <span className='bharatsim-hl'>streamline tedious processes</span> while still having access to their original codefiles.</p>
                        </li>
                        <li>
                            <p className='paragraph'>All users wanted to have the functionality of being able to <span className='bharatsim-hl'>download separate files</span> while also being able to copy only a particular <span className='bharatsim-hl'>section of code.</span></p>
                        </li>
                    </ul>
                </div>
                <div className='section'>
                    <h2 className='bs-heading'>USER PERSONAS</h2>
                    <h2 className='caption'>Who Do We Target?</h2>
                    <p className='paragraph'></p>
                    <div className='persona-div'><img className='persona-figure' src={Personas} alt='Personas'></img></div>
                </div>
            </div>
        </div>
    )
}

export default BharatSim
