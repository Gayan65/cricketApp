import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
  const navigate = useNavigate();

  let user = sessionStorage.getItem("user_id");
  useEffect(() => {
    if (user === "" || user === null) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Home;
