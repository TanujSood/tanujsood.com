import React from 'react'
import './Header.css'
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function Header() {
    return (
        <div className='header-layout'>
            <div className='content'>

                <Row align="middle" style={{alignContent:'center', height:'100%', backgroundColor:'beige'}}>
                    <Col span={14} style={{height:'25%', textAlign:'left', backgroundColor:'purple'}}>
                        <Title>Hi! I am Tanuj Sood</Title>
                        <h3>An Aspiring Product Designer</h3>
                        
                    </Col>
                    <Col span={10} style={{height:'70%', backgroundColor:'red'}}>wow</Col>
                </Row>
            </div>
            
        </div>
    )
}

export default Header
