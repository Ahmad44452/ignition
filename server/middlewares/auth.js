require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

exports.checkToken = async (req, res, next) => {
  try {
    if (req.headers['x-access-token']) {
      const token = req.headers['x-access-token'];
      const { _id, email, exp } = jwt.verify(token, process.env.DB_SECRET);
      res.locals.userData = await User.findById(_id);
      next();
    } else {
      next();
    }

  } catch (error) {
    return res.status(400).json({ message: "Bad Token", error: error })
  }
}

exports.checkLoggedIn = (req, res, next) => {
  const user = res.locals.userData;
  if (!user) return res.status(400).json({ message: "No User" });
  req.user = user;
  next();
}