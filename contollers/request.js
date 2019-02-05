 
const Note = require('../models/Quest')

module.exports = {
    redirect: (req, res) => {
        res.redirect('/quests')
    },
    index: (req, res) => {
        Quests.find({notes})
        res.render("partials/", Quests);
    },
    show: (req, res) => {
        Note.findOne({_id: req.params.id })
        .then(quest_giver  => {
            res.render('show', { quest_giver  })
        })
    }
}