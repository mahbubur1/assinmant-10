import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">
       <img src={logo} alt="" />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      
      </Nav>
      <Nav>
      <Nav.Link href="home#services">Services</Nav.Link>
        <Nav.Link as={Link} to="/aboutMe">AboutME</Nav.Link>
        <Nav.Link eventKey={2} as={Link} to="/login">
         Login
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
