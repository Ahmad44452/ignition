const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  firstname: {
    type: String,
    maxLength: 100,
    trim: true
  },
  lastname: {
    type: String,
    maxLength: 100,
    trim: true
  },
  age: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now()
  }
})
