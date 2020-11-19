
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('changelog').del()
    .then(function () {
      // Inserts seed entries
      return knex('changelog').insert([
        {id: '1', description: 'Publish JSON version', version: '0.0.1', created_at: '2020-10-20'},
        {id: '2', description: 'Update to use database (sqlite3 on dev, Postgres on production', version: '0.0.2', created_at: '2020-10-28'},
        {id: '3', description: 'Add orderby query parameter to albums and artist views and default to name', version: '0.0.3', created_at: '2020-10-28'},
        {id: '4', description: 'Add route tests', version: '0.0.4', created_at: '2020-10-29'}
      ]);
    });
};
