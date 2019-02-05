

const express = require('express');
const router = express.Router()

const indexController = require('../controllers/quests')

router.get('/', indexController.redirect)
router.get('/quests', indexController.index)
router.get('/quest/:someParameter', indexController.show)

module.exports = router