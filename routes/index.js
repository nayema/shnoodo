const express = require('express')
const router = express.Router()

/* GET task list */
router.get('/', function (req, res, next) {
  res.render('index')
})

/* POST new task */
router.post('/', function (req, res, next) {
  let newTaskName = req.body['new-task-name']
  res.render('index', { tasks: [newTaskName] })
})

module.exports = router
