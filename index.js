const express = require('express');
const app = express();
const hbs = require("hbs");
const Quest = require('./models/Quest');

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.redirect('/quests')
 })
 
 app.get("/quests", (req, res) => {
  Quest.find({})
  .sort({ createdAt : -1 })
  .then(quests => {
    res.render("index", { quests })
    })
 })
 
 // used to identify or grab a single quest from the database

 app.get("/quest/:id", (req, res) => {
  Quest.findOne({})
  .then(quest => {
    res.render("show", { quest })
    })
  }
 )
 

app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

