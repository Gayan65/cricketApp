import express from "express";
import { Player } from "../schemas/Player.js";
import { Team } from "../schemas/Team.js";
import bodyParser from "body-parser";

const player_router = express();
player_router.use(bodyParser.urlencoded({ extended: false }));

//Create Player
player_router.post("/player/create", async (req, res) => {
  const { name, mobile, batch, team } = req.body;
  const player = new Player({
    name: name,
    mobile: mobile,
    batch: batch,
    team: team,
  });
  try {
    await player.save().then(async (player) => {
      if (player) {
        //Apply to edit team by ID and

        await Team.findOneAndUpdate(
          { _id: team },
          { $push: { player: player._id } },
          { new: true }
        ).then((updatedTeam) => {
          res.status(200).json({
            success: true,
            message: "Player added successfully ! ",
            team: updatedTeam,
          });
        });
      } else {
        res.status(200).json({
          success: false,
          message: "player not added successfully !",
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

//Get all players
player_router.get("/player/all", async (req, res) => {
  try {
    await Player.find().then((players) => {
      res.status(200).json({
        success: true,
        players: players,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

//Delete a player
player_router.delete("/player/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Player.findByIdAndDelete(id).then((deletedPlayer) => {
      res.status(200).json({
        success: true,
        message: `${deletedPlayer.name}, deleted successfully `,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});

export default player_router;
