import React, { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const AddPlayerGroup = () => {
  const [inputData, setInputData] = useState({
    name: "",
    mobile: "",
    batch: "",
    team: "",
  });

  const [teams, setTeams] = useState([]);

  //Handle input elements
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle team selection separately
  const handleTeamChange = (event) => {
    const teamId = event.target.value;
    setInputData((prevData) => ({
      ...prevData,
      team: teamId,
    }));
  };

  //Submit data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = qs.stringify(inputData);
    await axios
      .post("http://localhost:4000/player/create", data)
      .then((response) => {
        window.location.reload();
        alert(response.data.message);
      })
      .catch((err) => alert("Team is not selected!"));

    //Clear inputs after submitting the form
    setInputData({
      name: "",
      mobile: "",
      batch: "",
      team: "",
    });
  };

  //Calling all the teams and players
  useEffect(() => {
    axios
      .get("http://localhost:4000/team/all")
      .then((response) => {
        setTeams(response.data.team);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Player name here.."
          onChange={handleInputChange}
          name="name"
          value={inputData.name}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="text"
          placeholder="Player mobile here.."
          onChange={handleInputChange}
          name="mobile"
          pattern="[0-9]{10}"
          title="Please enter 10 digits"
          value={inputData.mobile}
          required
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
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Team</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleTeamChange}
          name="team"
          required
        >
          <option>No teams</option>
          {teams.length > 0 &&
            teams.map((team, i) => (
              <option value={team._id} key={i}>
                {team.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        <FontAwesomeIcon icon={faUserPlus} />
        <span className="ms-1">Add</span>
      </Button>
    </Form>
  );
};

export default AddPlayerGroup;
