exports.up = function (knex) {
  return knex.schema.dropTable('artists')
    .then(() => {
      return knex.schema.createTable('artists', (table) => {
        table.increments('id')
        table.string('name')
      })
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('artists')
}
