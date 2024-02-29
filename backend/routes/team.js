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
        message: `team added successfully !, `,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

//Get all teams with their players
team_router.get("/team/all", async (req, res) => {
  try {
    await Team.find()
      .populate("player")
      .then((team) => {
        if (team) {
          res.status(200).json({
            success: true,
            team: team,
          });
        } else {
          res.status(200).json({
            success: false,
            message: "Team can not be found",
          });
        }
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

//Get a team and players
team_router.get("/team/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Team.find({ _id: id })
      .populate("player")
      .then((team) => {
        if (team) {
          res.status(200).json({
            success: true,
            team: team,
          });
        } else {
          res.status(200).json({
            success: false,
            message: "Team can not be found",
          });
        }
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

// Delete a Team
team_router.delete("/delete/team/:id", (req, res) => {
  const teamId = req.params.id;
  try {
    Team.findByIdAndDelete(teamId)
      .populate("player")
      .then(async (deletedTeam) => {
        if (deletedTeam) {
          //Delete the respective players
          if (deletedTeam.player.length > 0) {
            await Player.deleteMany({ team: teamId });
          }
          return res.status(200).json({
            success: true,
            message: `${deletedTeam.name} deleted successfully !`,
            team: deletedTeam,
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Team can not be found",
          });
        }
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

//Update a team
team_router.patch("/team/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Team.findByIdAndUpdate(id, { $set: req.body }, { new: true }).then(
      (newTeam) => {
        res.status(200).json({
          success: true,
          team: newTeam,
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

export default team_router;
