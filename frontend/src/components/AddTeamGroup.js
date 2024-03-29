import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const AddTeamGroup = () => {
  const [inputData, setInputData] = useState({
    name: "",
    register: false,
  });

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
      .post("https://cricketapp-xcw0.onrender.com/team/create", data)
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message);
          window.location.reload();
        } else {
        }
      })
      .catch((err) => console.log(err));

    //Clear inputs after submitting the form
    setInputData({
      name: "",
      register: false,
    });
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Team name here.."
          onChange={handleInputChange}
          name="name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Registered"
          checked={inputData.register}
          onChange={() =>
            setInputData((prevData) => ({
              ...prevData,
              register: !prevData.register, // Toggle the value
            }))
          }
          name="register"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        <FontAwesomeIcon icon={faAddressCard} />
        <span className="ms-1">Add</span>
      </Button>
    </Form>
  );
};

export default AddTeamGroup;
