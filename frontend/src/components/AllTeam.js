import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Accordion, ListGroup } from "react-bootstrap";

const AllTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/team/all")
      .then((response) => {
        console.log(response.data);
        setTeams(response.data.team);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <Container className="mt-5">
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        {teams !== undefined &&
          teams.map((team, i) => (
            <Accordion.Item eventKey={i} key={i}>
              <Accordion.Header>{team.name}</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  {team.player &&
                    team.player.map((teamPlayer, i) => (
                      <ListGroup.Item key={i}>
                        {i + 1}. {teamPlayer.name}
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </Container>
  );
};

export default AllTeam;
