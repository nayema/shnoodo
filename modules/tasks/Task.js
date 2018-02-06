const Model = require('../common/model')

class Task extends Model {
  static get tableName () {
    return 'tasks'
  }
}

module.exports = Task
