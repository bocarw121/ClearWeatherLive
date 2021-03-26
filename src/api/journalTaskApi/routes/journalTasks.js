const express = require("express");
const router = express.Router();

// initial tasks
const tasks = [
  {
    task: "Clean the car",
    isComplete: false,
  },
  {
    task: "Mow the lawn",
    isComplete: false,
  },
  {
    task: "Iron work clothes",
    isComplete: false,
  },
];

// Gets all tasks
router.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Adds tasks
router.post("/api/tasks", (req, res) => {
  const task = req.body.task;

  tasks.push({ task: task, isComplete: false });
  res.status(201).json({ task: task, isComplete: false });
});

// Toggles journal task done
router.put("/api/tasks", (req, res, next) => {
  const id = req.body.taskId;

  const index = tasks[id];

  if (index.isComplete === false) {
    index.isComplete = true;
    res.status(201).json({ index, [index.isComplete]: true });
  } else {
    index.isComplete = false;
    res.status(201).json({ index, [index.isComplete]: false });
  }
  next();
});

// deletes task
router.delete("/api/tasks", (req, res) => {
  const id = req.body.taskId;
  res.status(204).json(tasks.splice(id, 1));
});

module.exports = router;
