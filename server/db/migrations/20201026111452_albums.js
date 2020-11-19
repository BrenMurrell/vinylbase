
exports.up = function(knex) {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('artist')
    table.string('condition')
    table.string('notes')
    table.string('image')
    table.string('spotifyId')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('albums')
};
