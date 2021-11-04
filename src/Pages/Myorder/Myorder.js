import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';
import Select from 'react-select';
import Information from '../Home/Information/Information';


const Myorder = () => {
   
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (


        <Container>
                <Row>
            <Col lg={9} xs={12}>
            
            <h2 className="text-center border-bottom bg-light"> Order details</h2>
                
            <form className="border p-2"onSubmit={handleSubmit(onSubmit)}>
                <Row>
                <Col lg={6} className="d-flex flex-column">
                <input 
                        readOnly
                        placeholder="Booking Name"
                        defaultValue="Sushanta"
                        className="my-1 p-2"    
                        type="text"
                        {...register("firstName", { required: true, maxLength: 20 })} 
                />
                    <label>Your Email</label>
                <input 
                        readOnly
                        defaultValue="sushanta.sust@gmail.com"
                        className="my-1 p-2"  
                        {...register("email", { required:true })} 
                        type="email"
                />
                    <label className="fw-bold">What types of service do you need?</label>
                <input 
                        readOnly
                        defaultValue="Visa Consultancy"
                        className="my-1 p-2"  
                        {...register("service", { required:true })} 
                        type="email"
                />
                <input 
                        
                        placeholder="Your Prefered Destination"
                        className="my-1 p-2"  
                        {...register("prefered destination",)} 
                        type="text"
                />
                <input 
                        
                        placeholder="Your Prefered Destination"
                        className="my-1 p-3"  
                        {...register("prefered destination",)} 
                        type="text"
                />
                </Col>

                <Col lg={6} className="d-flex flex-column">
                <input 
                        
                        placeholder="Preferable Hotel"
                        className="my-1 p-2"  
                        {...register("preferable hotel",)} 
                        type="text"
                />
                <textarea 
                        style={{resize:'none'}} 
                        placeholder="How can we assist you in visa?"
                        className="my-1 p-2"  
                        {...register("preferable hotel",)} 
                        type="text"
                />

                <textarea 
                        style={{resize:'none'}} 
                        className="my-1 p-2"  
                        placeholder="Your Address"
                        {...register("address", { required:true })} 
                        type="text"
                />
                <textarea 
                        style={{resize:'none'}} 
                        className="my-1 p-2"  
                        placeholder="Your Address"
                        {...register("address", { required:true })} 
                        type="text"
                />
                    
                <input 
                        className="my-1 p-2"  
                        placeholder="Date for visit"
                        {...register("date", { required:true })} 
                        type="date"
                />
                </Col>
            </Row>
                    
               <input type="submit" className="mb-2 btn-warning"/>
               
            </form>
        
        </Col>
                    <Col lg={3} xs={12}>
                        <Information></Information>
                    </Col>
                </Row>
            </Container>



        
    );
};

export default Myorder;