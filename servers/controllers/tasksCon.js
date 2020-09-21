const Task = require("../models/task");
const { validationResult } = require("express-validator");
// const User = require("../models/user");

exports.getTasks = async (req, res) => {
  try {
    const userID = await req.session.user.userID;
    const tasks = await Task.findAll({ where: { writer: userID } });

    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.postTasks = async (req, res) => {
  try {
    const user = await req.session.user;
    const writer = await user.userID;
    const content = await req.body.tasks.text;
    const taskId = await req.body.tasks.id;
    const status = await req.body.tasks.status;

    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);
      res.json({ error: "Text Length Problem", msg: result.errors[0].msg });
    } else {
      Task.create({
        id: taskId,
        writer: writer,
        content: content,
        status: status,
      });
      res.send("Get data successfully");
    }
  } catch (error) {
    res.send(error);
  }
};

exports.patchTasks = async (req, res) => {
  try {
    const taskId = req.body.id;
    const updatedStatus = await req.body.status;
    const task = await Task.findByPk(taskId);
    await Task.update(
      {
        ...task,
        status: updatedStatus,
      },
      { where: { id: taskId } }
    );

    res.send("Patch data successfully");
  } catch (error) {
    res.send("Patching data failed");
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const taskId = req.body.id;
    await Task.destroy({ where: { id: taskId, userID: req.user.userID } });
    res.send("Delete data successfully");
  } catch (error) {
    res.send("Deleting data failed");
  }
};
