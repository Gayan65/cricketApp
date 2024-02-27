import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: String,
  register: Boolean,
  player: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
});

export const Team = mongoose.model("Team", teamSchema);
