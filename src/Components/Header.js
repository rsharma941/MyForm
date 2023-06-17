import React from "react";
import { NavLink } from "react-router-dom";
import CelebalLogo from "../Assets/Images/celebal.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={CelebalLogo} width="250" height="50" alt="Brand logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Get In Touch
            </NavLink>
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>
            <NavLink to="/" className="text-decoration-none text-light">
              Features
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
