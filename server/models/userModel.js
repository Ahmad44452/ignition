const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already exists!"],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email")
      }
    }
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true
  },
  firstname: {
    type: String,
    maxLength: [100, "Max length: 100"],
    trim: true
  },
  lastname: {
    type: String,
    maxLength: [100, "Max length: 100"],
    trim: true
  }
})

const User = mongoose.model("User", userSchema);
module.exports = { User };