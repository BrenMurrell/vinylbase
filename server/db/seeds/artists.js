
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([{
        "id": 1,
        "name": "Pink Floyd"
      }, {
        "id": 2,
        "name": "The Beatles"
      }, {
        "id": 3,
        "name": "Jeff Wayne"
      }, {
        "id": 4,
        "name": "Dire Straits"
      }, {
        "id": 6,
        "name": "The Cars"
      }, {
        "id": 7,
        "name": "Led Zeppelin"
      }, {
        "id": 8,
        "name": "Tracy Chapman"
      }, {
        "id": 9,
        "name": "Jean-Michel Jarre"
      }]);
    });
};
