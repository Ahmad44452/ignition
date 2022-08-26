const express = require('express');
let router = express.Router();

router.route("/random").get(async (req, res) => {
  res.json({
    username: "Ahmad",
    age: "hehe"
  })
})


module.exports = router;