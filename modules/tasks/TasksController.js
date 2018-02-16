const TasksRepository = require('./TasksRepository')

class TasksController {
  static async all (req, res) {
    const tasks = await TasksController
      .repo(req)
      .getAllTasks()
    return res.send(tasks)
  }

  static async add (req, res) {
    const task = await TasksController
      .repo(req)
      .addTask(req.body['name'], req.body['category'])
    return res.send(task)
  }

  static async remove (req, res) {
    await TasksController
      .repo(req)
      .removeTask(req.body['id'])
    return res.end()
  }

  static repo (req) {
    return new TasksRepository(req.user.sub)
  }
}

module.exports = TasksController
