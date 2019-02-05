const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
    
    title: String,
    quest_giver: String,
    rewards: Array,
    locations: Array
});

module.exports = mongoose.model("User", User);
