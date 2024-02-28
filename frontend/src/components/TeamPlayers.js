import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table, Card, Container, Button, Accordion } from "react-bootstrap";
import axios from "axios";

const TeamPlayers = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  let { state } = useLocation();

  //Delete function
  const handleDelete = (playerId) => {
    axios
      .delete(`http://localhost:4000/player/delete/${playerId}`)
      .then((response) => {
        window.location.reload();
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  // Delete Team function
  const handleTeamDelete = (teamId) => {
    console.log(teamId);
    axios
      .delete(`http://localhost:4000/delete/team/${teamId}`)
      .then((response) => {
        navigate("/home");
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  //Calling all the teams and players
  useEffect(() => {
    axios
      .get(`http://localhost:4000/team/${state}`)
      .then((response) => {
        setTeam(response.data.team[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{team && team.name}</Card.Title>
          <Card.Text>
            Registration Status is the fees is{" "}
            {team && (team.register ? "paid" : "not paid")}.
          </Card.Text>
          <Table striped="columns">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>Batch</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {team &&
                team.player.map((teamPlayer, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{teamPlayer.name}</td>
                    <td>{teamPlayer.mobile}</td>
                    <td>{teamPlayer.batch}</td>
                    <td>
                      <Button variant="warning">Edit</Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(teamPlayer._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Accordion className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Delete Team</Accordion.Header>
          <Accordion.Body>
            Danger zone, This will let to delete the entire team and players are
            you sure you want to delete the entire team and players.
            <div>
              {team && (
                <Button
                  variant="danger"
                  onClick={() => handleTeamDelete(team._id)}
                  className="mt-3"
                >
                  Delete
                </Button>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default TeamPlayers;
