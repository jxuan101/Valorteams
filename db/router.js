const express = require('express')

const controller = require('./controller.js')

const router = express.Router()

router.get('/:map', controller.getTeamsByMap)

module.exports = router