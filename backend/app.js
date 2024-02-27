import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import user_route from "./routes/user.js";

const app = express();
const port = process.env.PORT;
const url = process.env.DBURL;

app.use(user_route);

await mongoose.connect(url).then(() => {
  console.log("DB Connected!");
  app.listen(port, () => {
    console.log(`Server running port number ${port}`);
  });
});
