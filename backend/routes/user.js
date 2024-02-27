import express from "express";
import { User } from "../schemas/User.js";
import bodyParser from "body-parser";

const user_router = express();
user_router.use(bodyParser.urlencoded({ extended: false }));

//Creating users
user_router.post("/user/create", async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    await user.save().then(() => {
      return res.status(200).json({
        success: true,
        message: "saved successfully to DB",
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

//User Login
user_router.post("/user/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    await User.findOne({ username: username }).then((user) => {
      if (!user) {
        return res.status(200).json({
          success: false,
          message: "User not found ! ",
        });
      } else {
        if (user.username == username && user.password == password) {
          return res.status(200).json({
            success: true,
            message: "User login successfully ! ",
            user: user,
          });
        } else {
          return res.status(200).json({
            success: false,
            message: "Invalid password",
          });
        }
      }
    });
  } catch (error) {
    console.error(err);
  }
});

export default user_router;
