const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '..', 'data', 'tasks.json');

function getStoredTasks() {
  const fileData = fs.readFileSync(filePath);

  const storedTasks = JSON.parse(fileData);

  return storedTasks;
}

function storeTasks(storedTasks) {
  fs.writeFileSync(filePath, JSON.stringify(storedTasks, null, 2));
}

module.exports = {
    getStoredTasks: getStoredTasks,
    storeTasks: storeTasks
}
