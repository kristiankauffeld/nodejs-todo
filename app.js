//importing core Node libs:
const fs = require('fs');
const path = require('path');

//importing 3rd party libs:
const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'tasks.json');
  const fileData = fs.readFileSync(filePath);

  const storedTasks = JSON.parse(fileData);

  res.render('index', {
    numberOfTasks: storedTasks.length,
    tasks: storedTasks,
  });
});

app.post('/create-todo', (req, res) => {
  const task = req.body.task;

  const filePath = path.join(__dirname, 'data', 'tasks.json');
  const fileData = fs.readFileSync(filePath);

  const storedTasks = JSON.parse(fileData);

  storedTasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(storedTasks, null, 2));

  res.redirect('/');
});

app.post('/delete-todo', (req, res) => {
  const completedTask = req.body.completedTask;

  const filePath = path.join(__dirname, 'data', 'tasks.json');
  const fileData = fs.readFileSync(filePath);

  const storedTasks = JSON.parse(fileData);

  console.log(storedTasks)
  console.log('input: ' + completedTask);

  for (const task of storedTasks) {
    if (completedTask === task) {
      console.log('removed: ' + `"${task}"` + `, at index ${storedTasks.indexOf(task)}`);
      console.log(storedTasks.splice(storedTasks.indexOf(task), 1));
    }
  }
  
  fs.writeFileSync(filePath, JSON.stringify(storedTasks, null, 2));

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
