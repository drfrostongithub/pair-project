const express = require('express')
const router = express.Router()

const jobRouter = require('./job-router.js')
const profileRouter = require('./profile-router.js')
const loginRouter = require('./login-router.js')

router.use(`/profiles`, profileRouter)
router.use(`/jobs`,jobRouter)
router.use('/' , loginRouter)

module.exports = router
