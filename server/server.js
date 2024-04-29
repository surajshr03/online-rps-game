
const express = require("express");
const io = require("socket.io");
const http = require("http");
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const bodyParser = require("body-parser");


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




