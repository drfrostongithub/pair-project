const express = require('require')
const router = express.Router()

const jobRouter = require('./job-router.js')
const profileRouter = require('./profile-router')

router.use(`/`)
router.use(`/profile`, profileRouter)
router.use(`/job`,jobRouter)

module.exports = router
