const express = require('express')
const router = express.Router()

const TasksController = require('./TasksController')

router.get('/', TasksController.all)
router.post('/', TasksController.add)
router.put('/', TasksController.update)
router.delete('/', TasksController.remove)

module.exports = router
