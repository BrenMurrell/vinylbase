exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_albums').insert([
        {
          id: '1',
          user_id: 1,
          album_id: 1,
          condition: 'Fair',
          notes: 'none',
          purchased_from: 'The Warehouse',
          purchase_price: '12.99'
        },
        {
          id: '2',
          user_id: 1,
          album_id: 2,
          condition: 'Fair',
          notes: 'none',
          purchased_from: 'Greytown Antiques',
          purchase_price: '22.99'
        },
        {
          id: '3',
          user_id: 2,
          album_id: 1,
          condition: 'Fair - cover is torn',
          notes: 'Funny story about a bidding war...',
          purchased_from: 'TradeMe',
          purchase_price: '47.99'
        }
      ])
    })
}
