import React from "react";
import { Container, Tab, Tabs, Card } from "react-bootstrap";
import AddTeamGroup from "./AddTeamGroup";
import ExistingTeamGroup from "./ExistingTeamGroup";

const Navigation = () => {
  return (
    <Container className="mt-3">
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Teams">
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
        <Tab eventKey="profile" title="Players">
          Tab content for Profile
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Navigation;
