const express = require('express')
const router = express.Router()

const jobRouter = require('./job-router.js')
const profileRouter = require('./profile-router.js')


router.use(`/profiles`, profileRouter)
router.use(`/jobs`,jobRouter)

module.exports = router
