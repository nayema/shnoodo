const Task = require('./Task')

class TasksRepository {
  static async getAllTasks (userId) {
    return await Task
      .query()
      .where('user_id', '=', userId)
  }

  static async addTask (name, category, userId) {
    return await Task
      .query()
      .insert({
        'name': name,
        'category': category,
        'user_id': userId
      })
  }

  static async removeTask (taskId, userId) {
    return await Task
      .query()
      .delete()
      .where('id', '=', taskId)
      .andWhere('user_id', '=', userId)
  }
}

module.exports = TasksRepository
