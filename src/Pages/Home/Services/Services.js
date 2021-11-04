import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Service from './../Service/Service';

const CustomServices = [
    {
        name: "International Package" ,
        description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
        img:"https://www.swantour.com/sites/default/files/styles/large/public/Best-of-Sydney-for-7-Days.jpg?itok=r3uCikQ2"
    },
    {
        name: "Domestic Package" ,
        description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
        img:"https://www.flightexpert.com/blog/wp-content/uploads/2019/02/Top-places-to-visit-in-Bangladesh-e1549252751384.jpg"
    },
    {
        name: "Student Package" ,
        description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
        img:"https://squadtours.com/assets/img/photos/1575443263_grouptour.jpg"
    },
    {
        name: "Expert Guide Service" ,
        description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
        img:"https://blog.urbanadventures.com/wp-content/uploads/2018/05/bucharest_sergiu_guide.jpeg"
    },
    // {
    //     name: "Expert Nurse Service" ,
    //     description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
    //     img:"https://www.swantour.com/sites/default/files/styles/large/public/Best-of-Sydney-for-7-Days.jpg?itok=r3uCikQ2"
    // },
    {
        name: "Hotel Reservation" ,
        description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
        img:"https://www.traveldailymedia.com/assets/2018/12/call-center2.jpg"
    },
    {
        name: "Visa Consultancy" ,
        description:"We offer you the opportunity to explore this beautiful earth with our international tour packages which are not only budget-friendly but are also extremely hassle-free.",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllgZFkTRWYyDU-k-Vf8FMM5JXmZMYB3QhHg&usqp=CAU"
    },
    
]

const Services = () => {
    return (
        <Container className="mt-2">
            <h2 className="text-center text-primary"> Our Services </h2>
            <Row>
               {CustomServices.map((service)=><Service key={service.name} service={service}></Service>)}
            </Row>
        </Container>
    );
};

export default Services;

//Domestic Tour Package
//Internation Tour Package
//Visa Arragement
//Hotel Reservation
//Student Tour Package
//Expert Guide Service
//Expert Nurse Service