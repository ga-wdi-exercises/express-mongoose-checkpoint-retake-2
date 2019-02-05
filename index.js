// partials can be used to complete this checkpoint, they are not required though. 
// in order to use partials you can use hbs to register the partials directory
// setting a partial directory was covered in a previous exercise
// partials have been provided in views/partials/
const express = require('express')
const app = express()
// const cors = require('cors')
const Quest = require('./models/Quest')

app.set('view engine', 'hbs')




//the below routes can be used or changed as you see fit

// GET '/' which should redirect to `/quests'
app.get("/", (req, res) => {
 res.redirect('/quests')
})

// GET '/quests' which render view with a list of notes
app.get('/quests', (req, res) => {
  Quest.find({})
  .then(quest => {
    res.render("index", { quest })
  })
})

// GET '/quest/:someParameter' where :someParameter can be used to identify or grab a single Quest from the database.
app.get("/quest/:id", (req, res) => {
  Quest.findOne({_id: req.params.id})
  .then(quest => {
      res.render("show", { quest });
    })
})


app.listen(3000, () => console.log('app is running Skyrim Rocks!'))

// DO NOT REMOVE THIS LINE:
module.exports = app
