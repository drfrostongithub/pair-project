const express = require('require')
const router = express.Router()
const ProfileController = require('../controllers/profile-controller.js')


routers.get('/' , ProfileController.getProfile)
routers.get('/add', ProfileController.addProfile);
routers.post('/add', ProfileController.addProfilePost);
routers.get('/:id/edit', ProfileController.editProfile);
routers.post('/:id/edit', ProfileController.editProfilePost);
routers.get('/:id/delete', ProfileController.getProfileDelete);


module.exports = router
