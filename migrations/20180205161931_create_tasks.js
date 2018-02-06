exports.up = knex => knex.schema.createTable('tasks', t => {
  t.increments()

  t.text('name').notNull().unique()
  t.text('category').notNull()
})

exports.down = knex => knex.schema.dropTable('tasks')
