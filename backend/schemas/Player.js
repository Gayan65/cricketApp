import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  batch: String,
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
});

export const Player = mongoose.model("Player", playerSchema);
