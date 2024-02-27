import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  let user = sessionStorage.getItem("user_id");

  useEffect(() => {
    if (user === "" || user === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <Navbar bg="primary" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">PCC CRICKET BASHERS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {loggedIn && (
            <Navbar.Text>
              <a href="/">Logout</a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
