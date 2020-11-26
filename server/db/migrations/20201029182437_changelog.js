exports.up = function (knex) {
  return knex.schema.createTable('changelog', (table) => {
    table.increments('id')
    table.string('version')
    table.timestamps()
    table.text('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('changelog')
}
