import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <Card className="text-center mt-5 custom-card">
      <Card.Body>
        <Card.Title className="mt-5">Thank you .. </Card.Title>
        <Card.Img variant="top" src={logo} style={{ maxWidth: "10rem" }} />
      </Card.Body>
    </Card>
  );
};

export default Footer;
