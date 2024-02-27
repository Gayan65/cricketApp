import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });

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
      .post("http://localhost:4000/user/login", data)
      .then((response) => {
        if (response.data.success) {
          sessionStorage.setItem("user_id", response.data.user._id);
          navigate("/home");
        } else {
          console.log(response.data);
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
        <Card style={{ maxWidth: "40rem" }}>
          <Card.Body>
            <Card.Title className="mb-4">Login</Card.Title>
            <Form method="POST" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  name="username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
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
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
