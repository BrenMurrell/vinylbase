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
})
