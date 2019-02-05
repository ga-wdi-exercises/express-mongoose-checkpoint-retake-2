const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Quest = new Schema({
    title: String,
    quest_giver: String,
    rewards: String,
    locations: String
})

module.exports = mongoose.model('Quest', Quest)
