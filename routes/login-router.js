const express = require('express')
const router = express.Router()
const LoginController = require('../controllers/login-controller.js')

router.get('/' , LoginController.getLogin)
router.post('/' , LoginController.postLogin)
router.get('/logout' , LoginController.logout)

module.exports = router
