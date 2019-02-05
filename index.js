
const express = require("express");


var hbs  = require('hbs');

var app = express();


app.set('view engine', 'hbs');

app.get("/", (req, res) => {
 res.send('')
})

app.get("/quests", (req, res) => {
  res.send('this should show all the quests')
})

app.get("/quest/:id", (req, res) => {
  res.send('this should show a single quest')
})

app.use(require('./routes/routes.js'))


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

