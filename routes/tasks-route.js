const express = require('express')
const router = express.Router()
const TasksController = require('../controllers/tasks-controller')

router.get('/', TasksController.getTaskList)
router.post('/', TasksController.createTask)

module.exports = router
