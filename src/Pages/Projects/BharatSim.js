import React from 'react'
import './Case.css'
import './BharatSim.css'
import { Row, Col, Divider } from 'antd'
import Spread from '../Components/Assets/BharatSim/BharatSimSpread.png';
import Principles from '../Components/Assets/BharatSim/Principles.png'
import Timeline from '../Components/Assets/BharatSim/Timeline.png'
import Quotes from '../Components/Assets/BharatSim/Quotes.png'
import Personas from '../Components/Assets/BharatSim/Personas.png'
import Iteration1 from '../Components/Assets/BharatSim/Iter1.png'
import Iteration2 from '../Components/Assets/BharatSim/Iter2.png'
import Iteration3 from '../Components/Assets/BharatSim/Iter3.png'
import Demo from '../Components/Assets/BharatSim/demo.gif'
import Features from '../Components/Assets/BharatSim/Features.png'



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
                    <p className='paragraph'>With our problem statement defined and users in sight, my next goal was to define personas for the unique target users I was aiming to create this tool for. To achieve this, we used empathy maps to distinguish between different problems users faced when interviewing them and narrowed down our target audience to two demographics.</p>
                    <div className='persona-div'>
                        <img className='persona-figure' src={Personas} alt='Personas' />
                    </div>
                    <p className="paragraph">After analyzing the user data gathered through our interviews, I was able to successfully identify goals that different sets of users needed to accomplish through the final web application. By creating personas, I could create two imaginary users that distinguished between the two identified demographics and help me design for the user by keeping these personas in mind.</p>
                    <p className="paragraph">With our user personas etched in stone, we could now move on to ideation and creation of mockups. For this particular project in mind, I wanted to create iterations of different concepts through mid-fidelity prototypes and then gauge user feedback through the use of paper prototypes to see where the ideas were lacking and how the prototype could be modified to suit the needs of both demographics.</p>
                </div>
                <div className='section'>
                    <h2 className='bs-heading'>IDEATION</h2>
                    <h2 className='caption'>Brainstorming...</h2>
                    <p className="paragraph">To start off with the brainstorming process, I made use of the previously created user goals in mind and created wireframes of what the general structure of the web application would look like. However, it was extremely hard to gauge user feedback on these wireframes as users weren't able to make out the different purpose of the elements on paper prototypes. So, I went on to create mid-fidelity prototypes to give the user a feel of the end-product using paper prototypes.</p>
                    <h3 className="sub-caption">First Iteration</h3>
                    <p className="paragraph">With an ambitious idea to create an end-to-end system that allows users to achieve all model simulations in a single session, my first approach was to design a prototype that allows users to acquire results of their study without ever having to look at the code base.</p>
                    <div className="iter-div"> 
                        <img src={Iteration1} alt="First Iteration" className="iter1" />
                    </div>
                    <p className="paragraph">Though this was a good starting idea, I recognized some immediate issues during user feedback sessions. While an end-to-end system would aid experienced users in picking up a complex software, it would ignore a vast majority of the target demographic. Owing to high complexity and low tweakability, the results of paper prototype tests indicated a high learning curve for new users.</p>
                    <h3 className="sub-caption">Second Iteration</h3>
                    <p className="paragraph">Learning from this critical flaw in the first iteration, the second variant was designed with new users in mind. To achieve this, I ideated upon a system that allowed users to select specific models and run them with different set parameters in mind allowing them to get a feel of what the simulation engine can achieve, with no coding required at any stage of the user flow.</p>
                    <div className="iter-div">
                        <img src={Iteration2} alt="Second Iteration" className="iter1" />
                    </div>
                    <p className="paragraph">Though a Scratch like drag and drop feature cut down the learning curve by approximately fifty percent, this iteration ignored the high tweakability aspect that experienced researchers longed for. And so, to create a best-of-both worlds scenario for both demographics, I combined features from the two iterations to come up with a final iteration.</p>
                    <h3 className="sub-caption">Third Iteration</h3>
                    <p className="paragraph">The third and final iteration encapsulated an entirely different system from the first two variants in an attempt to incorporate feedback from user testing sessions for all demographics. In place of creating a system that allows you to create simple visualizations within the web application, this iteration switched towards a code generation tool that allows users to tweak multiple parameters and then pasting generated snippets into the code base instead.</p>
                    <p className="paragraph">This result came as a realization of the current visualization engine being capable enough of generating results in a way that was user-friendly for all. So, to take advantage of the current system in place, I focused on helping users generate code instead.</p>
                    <div className="iter-div">
                        <img src={Iteration3} alt="Third Iteration" className="iter1" />
                    </div>
                    <p className="paragraph">The motive behind this idea was to allow new users to experiment with different parameters while allowing experienced users to generate long lines of code at the click of a button. Moreover, feedback on this system was increasingly positive as compared to the previous iterations and so, I decided to start development on the working model to incorporated all desired features into the final product.</p>
                </div>
                <div className="section">
                    <h2 className="bs-heading">DESIGN</h2>
                    <h2 className="caption">Progressing Ideas</h2>
                    <p className="paragraph">With a good idea of the features users would require to run the simulation engine, I looked back on initial user surveys to create a priority list of features that I would need to incorporate in the code generation tool in a way that makes it interactive for the user without impacting the user flow.</p>
                    <div className="feature_div">
                        <img src={Features} alt="Feature Map"className="features" />
                    </div>
                    <p className="paragraph">Creating feature maps such as this allowed me to map down top features that users would require to generate code from input parameters to visualization outputs they seek to analyze. At the same time, these features tended to be ones that required tedious lines of code and could be used by veteran users saving them valuable time.</p>
                    <h3 className="sub-caption">Working Prototype</h3>
                    <p className="paragraph">With the feature list ready, I created a working prototype for the web application using React.js. This application will soon be deployed and tested to measure user engagement and then improved upon as we gather more data.</p>
                    <div className="demo_div">
                        <img src={Demo} alt="demo" className="demo_gif" />
                    </div>
                    <p className="paragraph">Looking at initial usage after deployment to the core team working on BharatSim, I noticed an immediate spike in interest for the platform and an estimated seventy percent reduction in time it takes experienced researchers to generate outputs from scratch.</p>
                </div>
                <div className="section">
                    <h2 className="bs-heading">NEXT STEPS</h2>
                    <h2 className="caption">Final Insights</h2>
                    <p className="paragraph">I am quite content with the final prototype and wish to gather more data on how it impacts usage among both key demographics once it is available for use for all students at the institution. In the future, I wish to integrate more features to allow users to generate code for models other than disease spread simulations.</p>
                    <p className="paragraph">Overall, my <span className="bharatsim-hl">key learnings</span> from this project were:</p>
                    <ul className="list" id="list-item">
                        <li className="paragraph list-i">Conducting exhaustive user research is key in determining user needs and wants. By creating concrete user personas it becomes much easier to keep user goals in mind while developing products.</li>
                        <li className="paragraph list-i">Constant engagement with users during the ideation process saves time and helps you fail faster while letting you try out multiple ideas in the same amount of time.</li>
                        <li className="paragraph list-i">Keeping an open mind helps you identify new opportunities and paths one can take even though it may require a complete restructure of your ideas.</li>
                    </ul>
                    <p className="paragraph end">In conclusion, I wish to improve on these learnings in my next projects and help convert this tool to something that is used frequently by users interested in experimenting with BharatSim while reducing the cognitive load of current users.</p>
                </div>
            </div>
        </div>
    )
}

export default BharatSim
