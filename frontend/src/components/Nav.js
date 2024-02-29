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
    <Navbar className="custom-nav-bar">
      <Container>
        <Navbar.Brand className="nav-brand" href="/home">
          PCC CRICKET BASHERS
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {loggedIn && (
            <Navbar.Text>
              <a className="nav-brand" href="/">
                Logout
              </a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
