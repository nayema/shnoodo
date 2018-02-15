const Task = require('./Task')

class TasksController {
  static async all (req, res) {
    const tasks = await Task
      .query()
      .where('user_id', '=', req.user.sub)
    return res.send(tasks)
  }

  static async add (req, res) {
    const task = await Task.query().insert({
      'name': req.body['name'],
      'category': req.body['category'],
      'user_id': req.user.sub
    })
    return res.send(task)
  }

  static async remove (req, res) {
    await Task
      .query()
      .delete()
      .where('id', '=', req.body['id'])
      .andWhere('user_id', '=', req.user.sub)
    return res.end()
  }
}

module.exports = TasksController
