import express from "express";
import { User } from "../schemas/User.js";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import "dotenv/config";

const user_router = express();
user_router.use(bodyParser.urlencoded({ extended: false }));
const saltRounds = parseInt(process.env.SALT);

//Creating users
user_router.post("/user/create", async (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    // Store hash in your password DB.
    const user = new User({
      username: req.body.username,
      password: hash,
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
        bcrypt.compare(password, user.password, function (err, result) {
          // result == true
          if (user.username == username && result) {
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
        });
      }
    });
  } catch (error) {
    console.error(err);
  }
});

export default user_router;
