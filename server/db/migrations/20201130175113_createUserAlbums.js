exports.up = (knex, Promise) => {
  return knex.schema.createTable('user_albums', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('album_id')
    table.string('condition')
    table.string('notes')
    table.string('purchased_from')
    table.float('purchase_price', 10, 2)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user_albums')
}
