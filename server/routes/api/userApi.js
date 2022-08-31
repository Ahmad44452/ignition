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
      } while (user || (number.length !== 11));

      arr.push(number);
    }

    res.status(200).json(arr);
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/registerNumber').patch(checkLoggedIn, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (user.simStatus === 'notAlloted') {
      user.simStatus = "unactivated";
      user.simNumber = req.body.simNumber;
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.cnic = req.body.cnic;
      user.address = req.body.address;
    }

    const doc = await user.save();
    res.status(200).json(getUserProps(doc));
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/activatesim/:id').get(async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) return res.status(400).send(`<html style="background-color: #000"><body><h1 style="color: #fff">Invalid URL</h1></body></html>`);

    user.simStatus = 'activated';
    user.save();
    return res.status(200).send(`<html style="background-color: #000"><body><h1 style="color: #fff">Sim Activated. Refresh your dashboard!</h1></body></html>`);
  } catch (error) {
    return res.status(400).send(`<html style="background-color: #000"><body><h1 style="color: #fff">Invalid URL</h1></body></html>`);
  }
})

const getUserProps = (userObj) => ({
  _id: userObj._id,
  email: userObj.email,
  firstname: userObj.firstname,
  lastname: userObj.lastname,
  cnic: userObj.cnic,
  simNumber: userObj.simNumber,
  simStatus: userObj.simStatus,
  address: userObj.address
})

module.exports = router;