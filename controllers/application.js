const Quests = require('../models/Quest')

module.exports = {
    index: (req, res) => {
        Quests.find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .then(quests => {
                    res.render("index", { quests })
            })
        }
    }