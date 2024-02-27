import express from "express";
import { Team } from "../schemas/Team.js";
import { Player } from "../schemas/Player.js";
import bodyParser from "body-parser";

const team_router = express();
team_router.use(bodyParser.urlencoded({ extended: false }));

//Creating a team
team_router.post("/team/create", async (req, res) => {
  const { name, register } = req.body;

  const team = new Team({
    name: name,
    register: register,
  });

  try {
    await team.save().then((team) => {
      return res.status(200).json({
        success: true,
        message: `team add successfully !, `,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export default team_router;
