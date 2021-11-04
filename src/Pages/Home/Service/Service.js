import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const Service = (props) => {
    const {name,img,description} = props.service
    return (
        <Col xs={12} sm={6} md={6} lg={4} className="p-2">
            <Card style={{ width: '16rem' }}>
            <Card.Img style={{width:'254px',height:'180px'}}variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button ovariant="danger">Book {name}</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;