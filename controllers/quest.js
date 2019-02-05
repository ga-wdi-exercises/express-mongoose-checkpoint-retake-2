const Quest = require('../models/Quest')

module.exports = {
    create: (req, res) => {
        Quest.create({
            title: req.body.quest.title,
            quest_giver: req.body.quest.quest_giver,
            rewards: req.body.quest.rewards,
            locations: req.body.quest.locations
        })
        .then(quest => {
            res.redirect(`quest/${quest._id}`)
        })
    },
    redirect: (req, res) => {
        res.render('/quest')
    },
    show: (req, res) => {
        Quest.findOne({ _id: req.params.id })
        .then(quest => {
            res.render('show', { quest })
        })
    }
}