import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Badge, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const ExistingTeamGroup = () => {
  const [teams, setTeams] = useState([]);

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
    <ListGroup as="ol" numbered>
      {teams !== undefined &&
        teams.map((team, i) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={i}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <Link to={"/team"} state={team._id}>
                  {team.name}
                </Link>
              </div>
              {team.register ? (
                <span className="custom-font-good">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span className="ms-2">Subscription paid</span>
                </span>
              ) : (
                <span className="custom-font-bad">
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <span className="ms-2">Subscription not paid</span>
                </span>
              )}
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
