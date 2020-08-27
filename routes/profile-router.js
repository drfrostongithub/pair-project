const express = require('express')
const router = express.Router()
const ProfileController = require('../controllers/profile-controller.js')

router.get('/' , ProfileController.listProfile)
router.post('/' , ProfileController.listProfile)
router.get('/add' , ProfileController.getAddProfile)
router.post('/add' , ProfileController.postAddProfile)
router.get('/:id/edit' , ProfileController.getEditProfile)
router.post('/:id/edit' , ProfileController.postEditProfile)
router.get('/myprofile' , ProfileController.myProfile)
module.exports = router
