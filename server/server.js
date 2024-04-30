const express = require("express");
const io = require("socket.io");
const http = require("http");
const mongoose = require("mongoose");
const Signup = require("./models/Signup");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);

//Database Connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/rps-db");
    console.log("Database connection successful.");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
};
connectToDatabase();

server.listen(3001, () => {
  console.log("Listening on port 3001");
});

app.post("/signup", async (req, res) => {
  let signUpData = req.body;
  // console.log(signUpData);
  let password = signUpData.password;
  try {
    let hashPassword = await bcrypt.hash(password, 10);
    signUpData.password = hashPassword;
    // console.log(signUpData.password);
    let result = await Signup.create(signUpData);

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      result: result,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      message: error.message,
    });
  }
});
