import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar className="fixed-top" bg="light" expand="md">
            <Container>
                <Navbar.Brand href="/home">Miles Ahead</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link active href="/home">Home</Nav.Link>
                        <Nav.Link active href="/courses">Courses</Nav.Link>
                        <Nav.Link active href="/about">About Us</Nav.Link>
                        <Nav.Link active href="/reviews">Student's Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
