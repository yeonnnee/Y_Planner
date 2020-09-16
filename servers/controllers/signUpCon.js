const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.getData = (req, res) => {
  const data = User.fetchAll();
  res.json(data);
};

exports.postSignUp = (req, res) => {
  const name = req.body.user.name;
  const userID = req.body.user.userId;
  const password = req.body.user.password;
  const email = req.body.user.email;

  if (!validationResult(req).isEmpty()) {
    const result = validationResult(req);

    res.json({ msg: result.errors[0].msg });
  } else {
    const salt = bcrypt.genSaltSync(16);
    User.create({
      name: name,
      userID: userID,
      password: bcrypt.hashSync(password, salt),
      email: email,
    });

    res.send("Get data successfully");
  }
};

exports.deleteTasks = (req, res) => {
  const userId = req.body.id;
  User.delete(userId);
  res.send("Delete data successfully");
};
