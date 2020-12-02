/* eslint-disable promise/no-nesting */
const dbUserAlbums = require('./dbUserAlbums')
const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV
const testDb = knex(config[env])

beforeAll(() => {
})

beforeEach(() => {
  return testDb.migrate.latest()
    .then(() => {
      return testDb.seed.run()
    })
})

describe('userAlbums tests', () => {
  test('suite is jacked in', () => {
    expect(true).toBeTruthy()
  })

  test('can select all user albums', () => {
    const userId = 1
    const expected = 2
    return dbUserAlbums.getUserAlbums(userId, testDb)
      .then(userAlbums => {
        const actual = userAlbums.length
        expect(actual).toEqual(expected)
        return null
      })
  })

  test('can add a new user album', () => {
    const newAlbum = {
      user_id: 'lqPVxeafcDfiKIP4xQq3WbzDMPm1',
      album_id: 4,
      condition: 'Test condition',
      notes: 'Test notes',
      purchased_from: 'Test vendor',
      purchase_price: 123.45
    }
    const expected = newAlbum.purchased_from
    return dbUserAlbums.addUserAlbum(newAlbum, testDb)
      .then(id => {
        return dbUserAlbums.getUserAlbumEntry(id, testDb)
          .then(userAlbum => {
            const actual = userAlbum.purchased_from
            expect(actual).toEqual(expected)
            return null
          })
      })
  })
})
