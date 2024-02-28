import React from "react";
import { Link } from "react-router-dom";
import { Container, Tab, Tabs, Card } from "react-bootstrap";
import AddTeamGroup from "./AddTeamGroup";
import ExistingTeamGroup from "./ExistingTeamGroup";
import AddPlayerGroup from "./AddPlayerGroup";

const Navigation = () => {
  return (
    <Container className="mt-3">
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="profile" title="Teams">
          <Container className="mt-4">
            In this segment, you have the ability to both add new teams and
            seamlessly view existing teams.
          </Container>

          {/* Add team section start*/}
          <Container className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Add Team Section</Card.Title>
                <AddTeamGroup />
              </Card.Body>
            </Card>
          </Container>
          {/* Add team section Ends*/}

          {/* Existing team section Starts*/}
          <Container className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Existing Team Section</Card.Title>
                <ExistingTeamGroup />
              </Card.Body>
            </Card>
          </Container>
          {/* Existing team section Ends*/}
        </Tab>
        <Tab eventKey="home" title="Players">
          <Container className="mt-4">
            In this segment, you have the ability to add new players.
          </Container>

          {/* Add player section start*/}
          <Container className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Add Player Section</Card.Title>
                <AddPlayerGroup />
              </Card.Body>
            </Card>
          </Container>
          {/* Add player section Ends*/}
        </Tab>
        <Tab eventKey="public" title="Public">
          <Container className="mt-4">
            In this segment, you have the ability to add new players.
          </Container>

          {/* Public section start*/}
          <Container className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Public section</Card.Title>
                <Card.Text>
                  This section you can generate all teams report
                </Card.Text>
                <Link to={"/teams"}>Generate</Link>
              </Card.Body>
            </Card>
          </Container>
          {/* Public section Ends*/}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Navigation;
