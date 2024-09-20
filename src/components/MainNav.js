import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MainNav = () => (
    <Navbar bg="white" expand="lg" className="main-navbar">
        <Navbar.Brand href="/" className="store-name">
            KBR Retail
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default MainNav;
