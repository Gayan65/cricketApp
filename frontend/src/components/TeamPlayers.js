import React from "react";
import { useLocation } from "react-router-dom";

const TeamPlayers = () => {
  let { state } = useLocation();
  console.log(state);
  return <div>TeamPlayers</div>;
};

export default TeamPlayers;
