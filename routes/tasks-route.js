const express = require('express')
const router = express.Router()

class TasksController {
  static getTaskList (req, res) {
    res.render('tasks/index')
  }

  static createTask (req, res) {
    let newTaskName = req.body['new-task-name']
    res.render('tasks/index', { tasks: [newTaskName] })
  }
}

router.get('/', TasksController.getTaskList)
router.post('/', TasksController.createTask)

module.exports = router
