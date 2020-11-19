
exports.up = function(knex) {
  return knex.schema.table('changelog', table => {
    table.dropColumn('created_at')
    table.dropColumn('updated_at')
  })
  .then(() => {
    return knex.schema.table('changelog', table => {
      table.string('created_at')
    })
  })
};

exports.down = function(knex) {
  return knex.schema.table('changelog', table => {
    table.dropColumn('created_at')
    
  })
  .then(() => {
    return knex.schema.table('changelog', table => {
      table.timestamps()
    })
  })
};
