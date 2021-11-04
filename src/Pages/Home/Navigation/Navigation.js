import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
<Navbar bg="" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Travel Friend</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className="me-3 p-2 text-black" to="/home">Home</NavLink>
        <NavLink className="me-3 p-2 text-black" to="/services">Services</NavLink>
        <NavLink className="me-3 p-2 text-black" to="/myorder">My Order</NavLink>
        <NavLink className="me-3 p-2 text-black" to="/manageorder">Manage Order</NavLink>
        <NavLink className="me-3 p-2 text-black" to="/admin">Admin</NavLink>
        <NavLink className="me-3 p-2 text-black" to="/login">Login</NavLink>
      </Nav>
    </Navbar.Collapse>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button type="button" className="btn btn-danger" variant="outline-success">Search</Button>
      </Form>
  </Container>
</Navbar>
    );
};

export default Navigation;