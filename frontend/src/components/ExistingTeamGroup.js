import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge, ListGroup } from "react-bootstrap";

const ExistingTeamGroup = () => {
  const [teams, setTeams] = useState([]);

  //Calling all the teams and players
  useEffect(() => {
    axios
      .get("http://localhost:4000/team/all")
      .then((response) => {
        console.log(response.data.team);
        setTeams(response.data.team);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ListGroup as="ol" numbered>
      {teams !== undefined &&
        teams.map((team, i) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={i}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{team.name}</div>
              {team.register ? "Registered" : "Not Registered"}
            </div>
            <Badge bg="primary" pill>
              {team.player.length}
            </Badge>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default ExistingTeamGroup;
