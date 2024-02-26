import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <Navbar bg="primary" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">PCC CRICKET BASHERS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
