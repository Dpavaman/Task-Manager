const getAllTasks = (req, res) => {
  res.send("All items from the file");
};

const createTask = (req, res) => {
  res.send("Create Task");
};

const getTask = (req, res) => {
  res.send("Signle item from the file");
};

const updateTask = (req, res) => {
  res.send("update one item");
};

const deleteTask = (req, res) => {
  res.send("delete one item");
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  getTask,
  deleteTask,
};
