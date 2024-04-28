import { Col, Row, Image, FloatButton } from "antd";
import { QuestionCircleOutlined, LoginOutlined, SignatureOutlined, HomeFilled } from '@ant-design/icons';

import React from "react";
import Usercard from "./userCards";

const Homepage = () => {
 
    const showInfoDocument =()=>{
        console.log('info docs')
    }
    return (
        <div >
            <Row gutter={50}>
                <Col span={12}><Image src="/images/logo3.png" preview={false} height={'700px'} alt="Logo" /></Col>
                <Col span={12}><Usercard /></Col>
                <FloatButton onClick={showInfoDocument} icon={<QuestionCircleOutlined />}  type="primary" style={{ right: 24 }} />
                <FloatButton  icon={<LoginOutlined />}  type="primary" style={{ right: 100 }} />
                <FloatButton  icon={<SignatureOutlined />}  type="primary" style={{ right: 176 }} />

                <FloatButton  icon={<HomeFilled />}  type="primary" style={{ right: 252 }} />

            </Row>
        </div>

    )
}

export default Homepage;