const express = require('express');

const taskData = require('../util/task-data');

const router = express.Router();

router.get('/', (req, res) => {
  const storedTasks = taskData.getStoredTasks();

  res.render('index', {
    numberOfTasks: storedTasks.length,
    tasks: storedTasks,
  });
});

router.post('/create-todo', (req, res) => {
  const task = req.body.task;

  const storedTasks = taskData.getStoredTasks();

  storedTasks.push(task);

  taskData.storeTasks(storedTasks);

  res.redirect('/');
});

router.post('/delete-todo', (req, res) => {
  const completedTask = req.body.completedTask;

  const storedTasks = taskData.getStoredTasks();

  console.log(storedTasks);
  console.log('input: ' + completedTask);

  for (const task of storedTasks) {
    if (completedTask === task) {
      console.log('removed: ' + `"${task}"` + `, at index ${storedTasks.indexOf(task)}`);
      console.log(storedTasks.splice(storedTasks.indexOf(task), 1));
    }
  }

  taskData.storeTasks(storedTasks);

  res.redirect('/');
});

module.exports = router;
