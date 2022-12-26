import React from 'react'
import './About.css'
import { Row, Col } from 'antd'
import Profile from "../Pages/Components/Assets/profile.jpeg"

const style = { padding: '10px 0' };

function About() {
    return (
        <div>
            <Row className="back" gutter={16}>
                <Col className="gutter-row left" span={8}>
                    <div style={style} className="profile">
                        <div className="prof-image">
                            <img src={Profile} alt="Profile" className="profile-img" />
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row right" span={10}>
                    <h1 className="title">Hey, I am <span className="hl">Tanuj Sood!</span>👋</h1>
                    <p className="description">I'm a <span className="hl">product designer</span> currently studying at <span className="isu"> Iowa State University.</span> I have a background in Computer Science and I'm currently pursuing a Master's degree in Human-Computer Interaction.🎓</p>
                    <p className="description">I stumbled upon HCI while working on one of my school projects and quickly realized that I was passionate about working on products that create a postive impact on users.</p>
                    <p className="description">In my free time, I love reading science fiction novels📘 and consider myself a coffee connoisseur☕️. I'm also a big fan of football⚽️ (or as some may call it, soccer).</p>            
                    <p className="description">Currently, I'm learning more about virtual environments and polishing my UI skills. Feel free to reach out to me on <span className="linkedin-hl">Linkedin</span> or on <span className="mail-hl">email</span> and we can have a chat over a cup of coffee.</p>
                </Col>    
            </Row>
            <Row className="readinglist" justify="center">
                <Col className="reading-col gutter-row" span={18}>
                    <h1 className="reading-title">Next on the Reading List!</h1>
                </Col>
            </Row>
        </div>
    )
}

export default About
