import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table, Card, Container, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const TeamPlayers = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState(null);
  let { state } = useLocation();

  //Delete function
  const handleDelete = (playerId) => {
    axios
      .delete(`https://cricketapp-xcw0.onrender.com/player/delete/${playerId}`)
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
      .delete(`https://cricketapp-xcw0.onrender.com/delete/team/${teamId}`)
      .then((response) => {
        navigate("/home");
        alert(response.data.message);
      })
      .catch((err) => console.log(err));
  };

  let user = sessionStorage.getItem("user_id");

  const handleUpdateTeam = (teamId) => {
    const data = qs.stringify({
      register: true,
    });
    axios
      .patch(`https://cricketapp-xcw0.onrender.com/team/update/${teamId}`, data)
      .then((response) => {
        setTeam((prevTeam) => ({ ...prevTeam, register: true }));
      })
      .catch((err) => console.log(err));
  };

  //Calling all the teams and players
  useEffect(() => {
    if (user === "" || user === null) {
      navigate("/");
    } else {
      axios
        .get(`https://cricketapp-xcw0.onrender.com/team/${state}`)
        .then((response) => {
          setTeam(response.data.team[0]);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{team && team.name}</Card.Title>
          <Card.Text>
            Registration Status :{" "}
            {team &&
              (team.register ? (
                <span className="custom-font-good">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span className="ms-2">Subscription paid</span>
                </span>
              ) : (
                <span className="custom-font-bad">
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <span className="ms-2">Subscription not paid</span>
                </span>
              ))}
            .
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
                      <Link
                        to={"/player/edit"}
                        state={teamPlayer._id}
                        className="btn btn-warning"
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(teamPlayer._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
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
        <Accordion.Item eventKey="1">
          <Accordion.Header>Subscription</Accordion.Header>
          <Accordion.Body>
            You can edit subscription status from here, If the "Paid" button
            visible.
            <div>
              {team && team.register === false && (
                <Button
                  variant="primary"
                  onClick={() => handleUpdateTeam(team._id)}
                  className="mt-3"
                >
                  Paid
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
