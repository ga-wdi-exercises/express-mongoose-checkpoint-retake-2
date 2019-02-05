// partials can be used to complete this checkpoint, they are not required though. 
// in order to use partials you can use hbs to register the partials directory
// setting a partial directory was covered in a previous exercise
// partials have been provided in views/partials/

const express = require('express')
const app = express()
const hbs = require("hbs");

app.set('view engine', 'hbs')

const questController = require('./controllers/quests')
//the below routes can be used or changed as you see fit
app.get("/", (req, res) => {
  res.redirect('/quests')
})

app.get("/quests", questController.index)

app.get("/quest/:id", questController.show)


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

