exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: '1', username: 'bren', hash: '$argon2id$v=19$m=65536,t=2,p=1$vwqY7nkTa65DLQrTcAz08A$qOsWTT5lmI8kUc6NZbhSp2MlOvF3F6nuAFf+yz5c53o' },
        { id: '2', username: 'brendan', hash: '$argon2id$v=19$m=65536,t=2,p=1$Wzh5hYsENSTsE2+HB0GWMQ$nNHk9bJaxu0aaXLPx+fGNXqszTkba0qvpNTEqNXVx68' }
      ])
    })
}
