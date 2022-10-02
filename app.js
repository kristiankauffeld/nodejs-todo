const fs = require('fs');
const path = require('path');

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
  console.log(task)

  storedTasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(storedTasks, null, 2));

  res.redirect('/');
});

app.post('/delete-todo', (req, res) => {
  const task = req.body;

  const filePath = path.join(__dirname, 'data', 'tasks.json');
  const fileData = fs.readFileSync(filePath);

  const storedTasks = JSON.parse(fileData);

  console.log(task)

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
