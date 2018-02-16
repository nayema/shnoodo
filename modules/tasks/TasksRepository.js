const Task = require('./Task')

class TasksRepository {
  constructor (userId) {
    this.userId = userId
  }

  async getAllTasks () {
    return await Task
      .query()
      .where('user_id', '=', this.userId)
  }

  async addTask (name, category) {
    return await Task
      .query()
      .insert({
        'name': name,
        'category': category,
        'user_id': this.userId
      })
  }

  async removeTask (taskId) {
    return await Task
      .query()
      .delete()
      .where('id', '=', taskId)
      .andWhere('user_id', '=', this.userId)
  }
}

module.exports = TasksRepository
