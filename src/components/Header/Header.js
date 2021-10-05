import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// this component is for navigation of site
const Header = () => {
    return (
        <Navbar className="fixed-top"  bg="light" expand="md">
            <Container>
                {/* reload page when logo click */}
                <Navbar.Brand href="/home">Miles Ahead</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* route by react router */}
                    <Nav className="ms-auto">
                        <NavLink className="nav-link active" to="/home">Home</NavLink>
                        <NavLink className="nav-link active" to="/courses">Courses</NavLink>
                        <NavLink className="nav-link active" to="/about">About Us</NavLink>
                        <NavLink className="nav-link active" to="/reviews">Student's Feedback</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
