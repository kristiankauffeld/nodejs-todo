//importing core Node libs:
const fs = require('fs');
const path = require('path');

//importing 3rd party libs:
const express = require('express');

//importing my own files:
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
