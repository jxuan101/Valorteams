const express = require('express')

const controller = require('./controller.js')

const router = express.Router()

router.get('/maps/:map', controller.getTeamsByMap);

router.get('/timestamp', controller.getTimestamp);

module.exports = router