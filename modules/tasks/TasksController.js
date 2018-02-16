const TasksRepository = require('./TasksRepository')

class TasksController {
  static async all (req, res) {
    const tasks = await TasksRepository.getAllTasks(
      req.user.sub
    )
    return res.send(tasks)
  }

  static async add (req, res) {
    const task = await TasksRepository.addTask(
      req.body['name'],
      req.body['category'],
      req.user.sub
    )
    return res.send(task)
  }

  static async remove (req, res) {
    await TasksRepository.removeTask(
      req.body['id'],
      req.user.sub
    )
    return res.end()
  }
}

module.exports = TasksController
