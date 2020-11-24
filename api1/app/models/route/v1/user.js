const express = require("express");
const userModel = require("../../userModel");
const router = express.Router();

router.get("/", (req, res) => {
  const User = new userModel();

  User.name = req.body.name;
  User.id = req.body.id;
  User.bio = req.body.bio;

  User.save((error) => {
    if (error) res.send(err);
    res.json({ message: "SUCCESS!" });
  });
});

module.exports = router;
