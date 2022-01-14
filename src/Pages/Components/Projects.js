import React from 'react'
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './Projects.css'

const { Title } = Typography;
const style = { background: 'black', height:'300px' };


function Projects() {
    return (
        <div className='project-master'>
            <Title>Selected Projects</Title>
            <div className='card-stack'>
                <Row gutter={[32, 32]}>
                    <Col className="gutter-row" span={12}>
                        <a href="https://www.google.com/"><div style={style}>col-6</div></a>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Projects