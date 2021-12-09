const asyncWrapper = require("../middlewares/async-wrapper");
const Task = require("../models/Task");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json({ newTask });
});

const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return res
      .status(404)
      .json({ message: `No task with id ${req.params.id} ` });
  }
  res.status(201).json({ message: task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return res
      .status(404)
      .json({ message: `No Task with id ${req.params.id}` });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res
      .status(404)
      .json({ message: `No Task with id ${req.params.id}` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
