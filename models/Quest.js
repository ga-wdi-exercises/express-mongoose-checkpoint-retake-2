const mongoose = require('../db/connection')

// Create a new schema in your models/Quest.js file and store it in a variable called Quest, with 4 fields. Each field is expected to have a specific data type:

const Quest = new mongoose.Schema({
    title: String,
    quest_giver: String,
    rewards: Array,
    locations: Array
})


module.exports = mongoose.model('Quest', Quest)
