import React, { useState } from "react";
import { Card, Col, Row, Space } from 'antd';
import Meta from "antd/es/card/Meta";
import OwnerPage from "./ownerPage";

const UserCard = () => {
    const [redirectToOwnerPage, setRedirectToOwnerPage] = useState(false);

    const handleOwnerCardClick = () => {
        setRedirectToOwnerPage(true);
    };

    if (redirectToOwnerPage) {
        return <OwnerPage />;
    }

    return (
        <Col>
            <Space direction="vertical" size={50}>
                <Row gutter={50}>
                    <Col span={12}>
                        <Card
                            hoverable
                            style={{ width: 250, height: 200 }}
                            cover={<img alt="example" src="\images\unknownImage.png" />}
                        >
                            <Meta title="User" />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            hoverable
                            style={{ width: 250, height: 200 }}
                            cover={<img alt="Owner" src="\images\unknownImage.png" />}
                            onClick={handleOwnerCardClick}
                        >
                            <Meta title="Owner" />
                        </Card>
                    </Col>
                </Row>

                <Row justify={'space-around'}>
                    <Card
                        hoverable
                        style={{ width: 250, height: 200 }}
                        cover={<img alt="Admin" src="\images\unknownImage.png" />}
                    >
                        <Meta title="Admin" />
                    </Card>
                </Row>
            </Space>
        </Col>
    );
};

export default UserCard;
