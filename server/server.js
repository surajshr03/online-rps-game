const express = require('express');
const io = require('socket.io');
const http = require('http');
const mongoose = require('mongoose');
const User = require("./models/User");

const app = express();

const server = http.createServer(app);

// * 👇  Connecting to MongoDB database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/rps-db");
}

const db = mongoose.connection;
db.once("connected", () => console.log("Connected to MongoDB!"));

server.listen(3001, () => { console.log("Listening on port 3001"); });