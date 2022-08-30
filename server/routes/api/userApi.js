const express = require('express');
let router = express.Router();

const { checkLoggedIn } = require("../../middlewares/auth");

///////////// GET USER MODEL
const { User } = require("../../models/userModel");

router.route("/register").post(async (req, res) => {
  try {
    // Check if email is taken
    if (await User.isEmailTaken(req.body.email)) {
      return res.status(400).json({ message: "This email is already taken!" });
    }

    // Create User
    const user = new User({
      email: req.body.email,
      password: req.body.password
    })

    // Generate Token
    const token = user.generateToken();
    const doc = await user.save();

    // Send response
    res.cookie('x-access-token', token).status(200).json(getUserProps(doc));
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/login").post(async (req, res) => {
  try {

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "No account associated with this email!" });

    if (!req.body.password) return res.status(400).json({ message: "Wrong password!" });

    const comparePassword = await user.comparePassword(req.body.password);
    if (!comparePassword) return res.status(400).json({ message: "Wrong password!" });

    const token = user.generateToken();

    res.cookie('x-access-token', token).status(200).json(getUserProps(user));
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/auth").get(checkLoggedIn, async (req, res) => {
  res.status(200).json(getUserProps(req.user));
})

router.route('/generateNumbers').get(async (req, res) => {
  try {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
      let user;
      let number;
      do {
        number = '03' + (Math.floor(Math.random() * 999999999)).toString();
        user = await User.findOne({ simNumber: number });
      } while (user);

      arr.push(number);
    }

    res.status(200).json(arr);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})


const getUserProps = (userObj) => ({
  email: userObj.email,
  firstname: userObj.firstname,
  lastname: userObj.lastname,
  cnic: userObj.cnic,
  simNumber: userObj.simNumber,
  simStatus: userObj.simStatus,
  address: userObj.address
})

module.exports = router;