const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User name is required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
}, {
  timestamps: true 
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
