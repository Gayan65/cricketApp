import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import user_route from "./routes/user.js";
import team_router from "./routes/team.js";
import player_router from "./routes/player.js";

const app = express();
const port = process.env.PORT;
const url = process.env.DBURL;

app.use(cors());
app.use(user_route);
app.use(team_router);
app.use(player_router);

await mongoose.connect(url).then(() => {
  console.log("DB Connected!");
  app.listen(port, () => {
    console.log(`Server running port number ${port}`);
  });
});
