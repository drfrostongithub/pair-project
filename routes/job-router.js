const express = require('express')
const router = express.Router()
const JobController = require('../controllers/job-controller.js')


router.get('/' , JobController.listJob)
router.get('/add', JobController.getAddJob);
router.post('/add', JobController.postAddJob);
router.get('/:id/edit', JobController.getEditJob);
router.post('/:id/edit', JobController.postEditJob);
router.get('/:id/delete', JobController.getDeleteJob);
router.get('/:id/lamar' , JobController.lamarJob)
router.post('/:id/lamar' , JobController.postLamarJob)



module.exports = router
