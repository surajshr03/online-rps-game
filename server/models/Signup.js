const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
    },
    email: {
      type: String,
      required: [true, "Please enter valid email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Select a password."],
    }
  },
  {
    timestamps: true,
  }
);

const Signup = mongoose.model("Signup",signUpSchema);
module.exports=Signup;