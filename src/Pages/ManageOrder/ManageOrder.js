import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ManageOrder = () => {
    const handleClick =()=>{
        console.log("hello")
    }
    return (        
    <div className="border w-50 mx-auto mt-4 bg-light p-4"> 
        <h2 className="text-center border-bottom"> Manage Order</h2>
        <Container>
            <Row>
                <Col lg={3} className="text-center border">
                    Service Home
                </Col>
                <Col lg={3} className="text-center border">
                    User Name
                </Col>
                <Col lg={3} className="text-center">
                    <input value ="Delete" type="button" className=" w-100 btn btn-danger"onClick={handleClick}/>
                </Col>
                <Col lg={3}>
                    <input value ="Approve" type="button" className=" w-100 btn btn-success"onClick={handleClick}/>
                </Col>
            </Row>
        </Container>    

    </div>
    );
};

export default ManageOrder;