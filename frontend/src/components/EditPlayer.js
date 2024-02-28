import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Card, Container, Button } from "react-bootstrap";
import axios from "axios";

const EditPlayer = () => {
  const navigate = useNavigate();
  let { state } = useLocation();

  const [inputData, setInputData] = useState({
    name: "",
    mobile: "",
    batch: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const data = qs.stringify(inputData);
    axios.patch(`http://localhost:4000/player/update/${state}`, data);
  };

  let user = sessionStorage.getItem("user_id");
  useEffect(() => {
    if (user === "" || user === null) {
      navigate("/");
    } else {
      if (state) {
        axios
          .get(`http://localhost:4000/player/find/${state}`)
          .then((response) => {
            setInputData(response.data.player);
          });
      } else {
        navigate("/home");
      }
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>Player Edit </Card.Title>
          <Form method="PATCH" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Player name here.."
                onChange={handleInputChange}
                name="name"
                value={inputData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Player mobile here.."
                onChange={handleInputChange}
                name="mobile"
                value={inputData.mobile}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Batch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Player batch here.."
                onChange={handleInputChange}
                name="batch"
                value={inputData.batch}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditPlayer;
