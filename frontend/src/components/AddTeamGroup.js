import React from "react";
import { Form, Button } from "react-bootstrap";

const AddTeamGroup = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Team Name</Form.Label>
          <Form.Control type="email" placeholder="Team name here.." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Registered" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddTeamGroup;
