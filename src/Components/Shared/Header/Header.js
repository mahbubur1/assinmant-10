import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../Images/logo.png";
import '../../Shared/CustomCss/Custom.css'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  className="light-color-background"  sticky="top">
    <Container>
    <Navbar.Brand as={Link} to="/">
       <img src={logo} alt="" />
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      
      </Nav>
      <Nav>
        <Nav.Link href="home#services">SERVICES</Nav.Link>
        <Nav.Link as={Link} to="/aboutMe">ABOUT ME</Nav.Link>
        <Nav.Link eventKey={2} as={Link} to="/login">
        LOGIN
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
