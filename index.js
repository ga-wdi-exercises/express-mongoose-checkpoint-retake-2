const express = require('express')
const app = express()
const hbs = require('hbs')
const bodyParser = require('body-parser')

// partials can be used to complete this checkpoint, they are not required though. 
// in order to use partials you can use hbs to register the partials directory
// setting a partial directory was covered in a previous exercise
// partials have been provided in views/partials/

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")
app.use(express.static("public"))

app.use(require("./routes/index.js"))

//the below routes can be used or changed as you see fit
// app.get("/", (req, res) => {
//   res.redirect('/')
// })

// app.get("/quests", (req, res) => {
//   Quests.find({})
//     .then(quests => {
//       res.render("/index", { quests })
//   })
// })

// app.get("/quest/:id", (req, res) => {
//   Quests.findOne({ _id: req.params.id })
//   .then(quest => {
//       res.render("/show", { quest })
//   })
// })


// app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

