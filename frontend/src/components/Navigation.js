import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

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
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Players">
          Tab content for Profile
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Navigation;
