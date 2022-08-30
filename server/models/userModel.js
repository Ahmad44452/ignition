require('dotenv').config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



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
  },
  cnic: {
    type: String,
    length: [13, "Invalid CNIC!"]
  },
  simNumber: {
    type: String,
    length: [11, "Invalid No!"]
  },
  simStatus: {
    type: String,
    enum: ['notAlloted', 'unactivated', 'activated'],
    default: 'notAlloted'
  },
  address: {
    type: String,
    trim: true
  }
})

userSchema.pre("save", async function (next) {
  let user = this;
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }
  next();
})

userSchema.methods.generateToken = function () {
  let user = this;
  const userObj = { _id: user._id.toHexString(), email: user.email };
  const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: '1d' });
  return token;
}

userSchema.methods.comparePassword = async function (enteredPassword) {
  let user = this;
  const match = await bcrypt.compare(enteredPassword, user.password);
  return match;
}

userSchema.statics.isEmailTaken = async function (enteredEmail) {
  const user = await this.findOne({ email: enteredEmail });
  return !!user;
}


const User = mongoose.model("User", userSchema);
module.exports = { User };