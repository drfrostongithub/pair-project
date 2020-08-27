const express = require('express')
const router = express.Router()

const jobRouter = require('./job-router.js')
const profileRouter = require('./profile-router')

router.use('/jobs' , jobRouter)
router.use('/profiles' , profileRouter)

module.exports = router