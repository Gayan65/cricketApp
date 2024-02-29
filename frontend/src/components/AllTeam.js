import React, { useEffect, useState } from "react";
import axios from "axios";
import { QRCodeSVG } from "qrcode.react";
import { Container, Accordion, ListGroup, Card } from "react-bootstrap";

const AllTeam = () => {
  const [teams, setTeams] = useState([]);

  const currentUrl = window.location.href;

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

      <Accordion className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>QR Share</Accordion.Header>
          <Accordion.Body>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Scan Me..</Card.Title>
                <QRCodeSVG value={currentUrl} size={256} />
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AllTeam;
