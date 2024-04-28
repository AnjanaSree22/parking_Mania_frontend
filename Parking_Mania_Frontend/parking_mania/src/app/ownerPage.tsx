import { Card, Col, Row, Space } from "antd";
import OwnerSignupPage from "./ownerSignupPage";
import React, { useState } from "react";
import SuccessMessage from "./successMessage";

const OwnerPage = () => {
    const cardData = [
        { title: "Enroll your parking space", backgroundColor: "#7CB9E8", width: "250px", height: "50px", value: 'newParkingSpaceEnrollment' },
        { title: "Booked slots", backgroundColor: "#7CB9E8", width: "250px", height: "50px" },
        { title: "Canceled slots", backgroundColor: "#7CB9E8", width: "250px", height: "50px" },
        { title: "Your parking slots", backgroundColor: "#7CB9E8", width: "250px", height: "50px" }
    ];

    const [isOwnerDetailsPageVisible, setOwnerDetailsPageVisible] = useState(false);

    const ownerPageOptionsRedirection = (value: string) => {
        if (value === 'Enroll your parking space') {
            setOwnerDetailsPageVisible(true);
        }
    };

    if (isOwnerDetailsPageVisible) {
        return <OwnerSignupPage />;
    }

    return (
        <Col>
            <Space direction="vertical" size={100}>
                {cardData.map((card, index) => (
                    <Row key={index}>
                        <Card style={{ backgroundColor: card.backgroundColor, width: card.width, height: card.height, alignContent: 'center' }} hoverable onClick={() => ownerPageOptionsRedirection(card.title)}>
                            {card.title}
                        </Card>
                    </Row>
                ))}
            </Space>
        </Col>
    );
};

export default OwnerPage;
