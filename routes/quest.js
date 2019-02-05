const express = require('express')
const router = express.Router()
const questController = require('../controllers/quest')
const applicationController = require('../controllers/application')

router.post('/', questController.create)
router.get('/', questController.redirect)
router.get('/quests', applicationController.index)
router.get('/:id', questController.show)

module.exports = router