class TasksController {
  static getTaskList (req, res) {
    res.render('tasks/index')
  }

  static createTask (req, res) {
    let newTaskName = req.body['new-task-name']
    res.render('tasks/index', { tasks: [newTaskName] })
  }
}

module.exports = TasksController
