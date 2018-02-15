exports.up = knex => knex.schema.alterTable('tasks', t => {
  t.text('user_id').notNull()
})

exports.down = knex => knex.schema.alterTable('tasks', t => {
  t.dropColumn('user_id')
})
