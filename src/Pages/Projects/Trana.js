import React from 'react'
import './Case.css'
import './Trana.css'
import { Row, Col, Divider } from 'antd'
import Spread from '../Components/Assets/Trana/Trana-Spread.png';
import DP from '../Components/Assets/Trana/DesignProcess.png';
import stats from '../Components/Assets/Trana/userstats.png';
import AM from '../Components/Assets/Trana/AffinityMapping.png';
import PainPoints from '../Components/Assets/Trana/PainPoints.png';
import CompetitiveAnalysis from '../Components/Assets/Trana/CompetitiveAnalysis.png'
import UserFlow from '../Components/Assets/Trana/UserFlow.png'
import DesignOpportunities from '../Components/Assets/Trana/DesignOpportunities.png'
import Sketch from '../Components/Assets/Trana/Sketch.png'
import Prototype from '../Components/Assets/Trana/Prototype.png'



const style = { padding: '8px 0' };

function Trana() {
    return (
        <div>
            <div className='spread'>
                <img className="header-image" src={Spread} alt="Trana-Background"></img>
            </div>
            <div className='trana-master'>
                <div>
                    <h1 className='main-subtitle'>Motivating People To Stay Fit at Home!</h1>
                </div>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <h3 className='trana-roles'>CATEGORY</h3>
                                <h3>Passion Project</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <h3 className='trana-roles'>TEAM</h3>
                                <h3>Tanuj Sood</h3>
                                <h3>Neeraj Pandey</h3>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div style={style}>
                                <h3 className='trana-roles'>DURATION</h3>
                                <h3>November 2022 - December 2022</h3>
                            </div>
                        </Col>
                    </Row>
                <Divider className='divider' />
            </div>
            
            <div className='content-master'>
                <div className='section'>
                    <h2 className='trana-heading'>OVERVIEW</h2>
                    <h2 className='caption'>What Did We Do?</h2>
                    <p className='paragraph'>During pandemic struck times, I found no motivation to work out at home, so I decided to do something about it. With nowhere to go and loads of idle time, I decided to create an app that would help people find the motivation to get themselves out of bed. Träna is a social fitness app that motivates people to work out at home and stay fit.</p>
                    <p className='paragraph'>Träna connects users with there peers and allows them to work out together and compete in an attempt to dominate weekly scores. All of this, from the comfort of their own homes.</p>
                    
                </div>
                <div className='section'>
                <h2 className='trana-heading'>PROBLEM</h2>
                    <h2 className='caption'>No Motivation!</h2>
                    <p className='paragraph'>During the massive coronavirus outbreak, my life took a significant toll. Used to living on campus, living at home was a complete lifestyle change. More so, the closure of gyms all around the world took away my one hour of joy, which I used to relieve any stress I had during the day. No commute while the virus pondered around meant that fitness was a priority above all, indicating that we needed to get used to home workouts.</p>
                    <p className='paragraph'>My friends from college shared my emotions towards working out at home; there was no motivation. After trying dozens of apps, promising to turn me into the next Schwarzenegger, I spent several days trying to get used to home workouts. However, the user experience didn't do an excellent job of pushing me enough to stop me from binging Netflix shows instead.</p>
                    <p className='paragraph'>As a passion project, I decided to solve this problem through a fitness app's user experience that pushes users to workout and stay fit during the lockdown.</p>
                </div>

                <div className='section'>
                    <h2 className='trana-heading'>THE CHALLENGE</h2>
                    <h2 className='caption'>Setting Goals</h2>
                    <p className='paragraph'>It's difficult to keep up with a strict fitness regime when a thousand different things cloud your motivation to work out. People who try to pick up fitness apps often give up since they can't get themselves to make an effort to exercise everyday. So, while designing the app, my main challenges would be to:</p>
                    <ul className='list'>
                        <li>
                            <p className='paragraph'>Introduce a unique feature to induce motivation.</p>
                        </li>
                        <li>
                            <p className='paragraph'>Understand and improve on pain points from existing services.</p>
                        </li>
                        <li>
                            <p className='paragraph'>Think of a way to keep content fresh making sure users keep coming back.</p>
                        </li>
                    </ul>
                    <p className='paragraph'>Since running is not an option during a lockdown, I was inclined to create an app users could use to help them work out at home. My primary aim was to maximise user retention so that users can enjoy using the app everyday without losing interest or motivation.</p>
                </div>

                <div className='section'>
                    <h2 className='trana-heading'>DESIGN PROCESS</h2>
                    <h2 className='caption'>Mapping A Timeline</h2>
                    <p className='paragraph'>In order to create an effective output to the problem we are trying to tackle, each step of the process was divided into separate parts. This would allow us to put complete focus on individual processes while having a clear idea of the steps ahead. The design process we used is given below:</p>
                    <img className='figures' src={DP} alt='Design Process'></img>
                    <p className='paragraph'>Looking at the flow we opted to work with, our first step was to dive into the issue and truly understand the problem at hand. And so, we decided to speak to a bunch of stakeholders and empathised with them in order to gain insights on pre-existing pain points brought on by current solutions in the market.</p>
                </div>

                <div className='section'>
                    <h2 className='trana-heading'>USER RESEARCH</h2>
                    <h2 className='caption'>What Users Want</h2>
                    <p className='paragraph'>Solving a user-centric problem requires information from users to gauge their expectations from an ideal fitness app. Surveying 82 people from my university, I focused on regular gym-goers and how the lockdown affected their feelings and actions towards fitness. The results I acquired gave me insights I could work on and form user personas to keep in mind while designing the app.</p>
                    <img className='figures' src={stats} alt='User Stats'></img>
                    <p className='paragraph'>Visualising these insights validated our initial assumptions, I needed to prioritise motivation through the app's user experience. Asking people what pushed them to go to the gym, empathising with users' wants gave me a brilliant idea which would help me achieve my goal. In order to structure out research and find specific pain points we wanted to work on, we used affinity mapping, storyboarding and pain point prioritisation.</p>
                    <img className='figures' src={AM} alt='Affinity Mapping'></img>
                    <h3 className='sub-caption'>Identifying Pain Points</h3>
                    <p className='paragraph'>Many users claimed how their friends often were a motivation for them to visit the gym, and how by doing so they pushed each other to get fitter. Using these insights, we identified pain points and design opportunities which would help us in designing the final product. The pain points we came across over and over again were:</p>
                    <img className='figures' src={PainPoints} alt='Pain Points'></img>
                    <p className='paragraph'>These pain points allowed us to focus on a set number of problems that were popular among the target audience. By finding design opportunities around them, we would successfully address the current grievances with existing platforms and make our final product worthwhile.</p>
                </div>

                <div className='section'>
                    <h2 className='trana-heading'>COMPETITIVE ANALYSIS</h2>
                    <h2 className='caption'>Features ≠ Incentive</h2>
                    <p className='paragraph'>Using different fitness apps over the course of a week, my initial observation was how each app focused on one particular model to provide solutions for fitness. Be it a single 15-minute workout or a long-term commitment, this allowed the apps to specialise at what they do. However, even though the content in all these apps was similar, the way it was served had little to no differences among them.</p>
                    <p className='paragraph'>Before initiating my ideation phase, I wanted to see how these existing apps engage their users and how they address these pain points. By analysing areas they excel while observing domains they don’t cover, my design process will be smoother and will allow me to improve on some of the tools these apps employ.</p>
                    <img className='figures' src={CompetitiveAnalysis} alt='Competitive Analysis'></img>
                </div>

                <div className='section'>
                    <h2 className='trana-heading'>IDEATION</h2>
                    <h2 className='caption'>Jotting Down Ideas</h2>
                    <p className='paragraph'>With a set goal, in order to achieve the optimal output, we chose to design for pain points by looking at design opportunities. To be on the same page with each opportunity, we posed them as ‘How might we’ questions and intended to design for each opportunity separately.</p>
                    <img className='figures' src={DesignOpportunities} alt='Design Opportunities'></img>
                    <p className='paragraph'>Ideating and designing for these opportunities was fun and collaborative, allowing us to brainstorm over the viability of certain features for hours. To set off on our escapade, we chose to jot down our ideas in early stage low-fidelity wireframes.</p>
                    <img className='figures' src={Sketch} alt='Sketch'></img>
                    <p className='paragraph'>As visual learners, we thought it was best to create a site map for the app to give it a coherent structure which wouldn’t pose as a hinderance to the user in later stages. Not only did it allow us to be on the same page regarding the structure, it also gave us control over the user flow and how we could improve interactions to make navigation seamless.</p>
                    <img className='figures' src={UserFlow} alt='User Flow'></img>
                    <p className='paragraph'>With all the basic structure set, we were ready to move on to take advantage of our design opportunities.</p>
                </div>

                <div className='section'>
                    <h2 className='trana-heading'>DESIGN</h2>
                    <h2 className='caption'>Ideas ➔ Life</h2>
                    <p className='paragraph'>To start off and iterate over the structure of our prototypes, we decided to create mid-fidelity prototypes. This would allow us to maximize user experience on the app and save us time it will take us to rearrange and reorder the overall structure of elements.</p>
                    <div className='prototype-div'>
                        <img src={Prototype} alt="Mid-Fi and Hi-Fi Prototypes" className="prototype-1" />
                    </div>
                    {/* <h3 className='feature-caption'>Real-Time Workouts with Friends</h3>
                    <h3 className='feature-caption'>Longevity Streaks and Leaderboards</h3>
                    <h3 className='feature-caption'>Live Workout Streams by Professionals</h3> */}
                    <p className='paragraph'>Our next steps would be to implement the wireframes to mid-fidelity and high-fidelity prototypes and conduct a future round of testing to reflect on how users interact with these features. Stay tuned!</p>
                </div>

            </div>
        </div>
    )
}

export default Trana
