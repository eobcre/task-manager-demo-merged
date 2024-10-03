const express = require('express');
const router = express.Router();
const AssignTask = require('../models/assignTask');

router.post('/assignTasks', async (req, res) => {
  const { taskName, documentType, description } = req.body;

  const newTask = new AssignTask({
    taskName,
    documentType,
    description,
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/retrieveTasks', async (req, res) => {
  try {
    const tasks = await AssignTask.find();
    // console.log('tasks', tasks);
    res.json(tasks);
  } catch (error) {
    console.log('Error retrieving tasks:', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
