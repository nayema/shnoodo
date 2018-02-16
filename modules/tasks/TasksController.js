const TasksRepository = require('./TasksRepository')


class TasksController {
  static async all (req, res) {
    const repo = new TasksRepository(req.user.sub)
    const tasks = await repo.getAllTasks()
    return res.send(tasks)
  }

  static async add (req, res) {
    const repo = new TasksRepository(req.user.sub)
    const task = await repo.addTask(req.body['name'], req.body['category'])
    return res.send(task)
  }

  static async remove (req, res) {
    const repo = new TasksRepository(req.user.sub)
    await repo.removeTask(req.body['id'])
    return res.end()
  }
}

module.exports = TasksController
