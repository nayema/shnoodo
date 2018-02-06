const Task = require('./Task')

class TasksRepository {
  static async all () {
    return Task.query()
  }
}

module.exports = TasksRepository
