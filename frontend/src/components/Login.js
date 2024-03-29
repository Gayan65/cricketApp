import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  //Clear the session storage
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  //Handle input elements
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Submit data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = qs.stringify(inputData);
    await axios
      .post("https://cricketapp-xcw0.onrender.com/user/login", data)
      .then((response) => {
        if (response.data.success) {
          sessionStorage.setItem("user_id", response.data.user._id);
          navigate("/home");
          window.location.reload();
        } else {
          setMessage(response.data.message);
        }
      })
      .catch((err) => console.log(err));

    //Clear inputs after submitting the form
    setInputData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Container className=" mt-5 ">
        <Card style={{ maxWidth: "30rem" }}>
          <Card.Body>
            <Card.Img
              variant="center"
              src={logo}
              style={{ maxWidth: "40rem" }}
            />
            <Card.Title className="mb-4">Login</Card.Title>
            <Form method="POST" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="ms-1">Email</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  name="username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <FontAwesomeIcon icon={faKey} />
                  <span className="ms-1">Password</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                  name="password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            {message && (
              <Alert className="mt-3" variant="danger">
                {message}
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
