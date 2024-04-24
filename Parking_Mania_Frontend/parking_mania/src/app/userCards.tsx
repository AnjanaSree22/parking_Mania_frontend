import React from "react";
import { Avatar, Card, Col, Row, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from "antd/es/card/Meta";

const Usercard = () => {
    return (
        
        <Col >
        <Space direction="vertical" size={50}>
            <Row gutter={50}>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{ width: 250, height: 200 }}
                        cover={
                            <img
                                alt="example"
                                src="\images\unknownImage.png"
                            />
                        }
                    >
                        <Meta
                            title="User"
                        />
                    </Card></Col>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{ width: 250, height: 200 }}
                        cover={
                            <img
                                alt="Owner"
                                src="\images\unknownImage.png"
                            />
                        }
                    >
                        <Meta
                            title="Owner"
                        />
                    </Card></Col>
            </Row>

            <Row justify={'space-around'}><Card
                hoverable
                style={{ width: 250, height: 200 }}
                cover={
                    <img
                        alt="Admin"
                        src="\images\unknownImage.png"
                    />
                }
            >
                <Meta
                    title="Admin"
                />
            </Card></Row>

            </Space>
        </Col>
    )
}
export default Usercard;