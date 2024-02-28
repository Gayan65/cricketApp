import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Badge, ListGroup, Card, Container } from "react-bootstrap";
import axios from "axios";

const TeamPlayers = () => {
  const [team, setTeam] = useState(null);
  let { state } = useLocation();
  console.log(state);

  //Calling all the teams and players
  useEffect(() => {
    axios
      .get(`http://localhost:4000/team/${state}`)
      .then((response) => {
        console.log(response.data.team[0]);
        setTeam(response.data.team[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-5">
      <Card style={{ maxWidth: "35rem" }}>
        <Card.Body>
          <Card.Title>{team && team.name}</Card.Title>
          <Card.Text>
            Registration Status is the fees is{" "}
            {team && (team.register ? "paid" : "not paid")}.
          </Card.Text>
          <ListGroup as="ol" numbered>
            {team &&
              team.player.map((teamPlayer, i) => (
                <ListGroup.Item key={i} as="li">
                  {teamPlayer.name}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TeamPlayers;
