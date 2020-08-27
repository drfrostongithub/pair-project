const express = require('require')
const router = express.Router()
const JobController = require('../controllers/job-controller.js')


routers.get('/' , JobController.getJob)
routers.get('/add', JobController.addJob);
routers.post('/add', JobController.addJobPost);
routers.get('/:id/edit', JobController.editJob);
routers.post('/:id/edit', JobController.editJobPost);
routers.get('/:id/delete', JobController.getJobDelete);



module.exports = router
