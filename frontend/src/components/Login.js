import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Container className=" mt-5 ">
        <Card>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
