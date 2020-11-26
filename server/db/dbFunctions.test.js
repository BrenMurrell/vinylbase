const dbFunctions = require('./dbFunctions')
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
describe('Initialise test suite', () => {
  test('suite is jacked in', () => {
    expect(true).toBeTruthy()
  })
})

describe('Artists database tests:', () => {
  test('CREATE: can add an artist', () => {
    const expected = 'Test artist'
    const newArtist = {
      name: 'Test artist'
    }
    return dbFunctions.addArtist(newArtist, testDb)
      // .then(() => dbFunctions.getArtistById(10, testDb)) //remember the anonymous function here! () =>
      .then((ids) => {
        return dbFunctions.getArtistById(ids[0], testDb)
      })
      .then(artist => {
        const actual = artist.name
        expect(actual).toEqual(expected)
      })
  })

  test('READ: can query all artists', () => {
    const expected = [1, 2, 3, 4, 6, 7, 8, 9]
    return dbFunctions.getArtistsAll('id', testDb)
      .then(artists => {
        const actual = artists.map(artist => artist.id)
        expect(actual).toEqual(expected)
      })
  })

  test('READ: can query artist by Id (2)', () => {
    const expected = 'The Beatles'
    return dbFunctions.getArtistById(2, testDb)
      .then(artist => {
        const actual = artist.name
        expect(actual).toEqual(expected)
      })
  })

  test('READ: cannot query artist by Id (9999)', () => {
    return dbFunctions.getArtistById(999, testDb)
      .then(artist => {
        const actual = artist
        expect(actual).toBeFalsy()
      })
  })

  test('UPDATE: can edit an artist', () => {
    const expected = { id: 2, name: 'Updated name' }
    const newData = {
      name: 'Updated name'
    }
    return dbFunctions.updateArtist(2, newData, testDb)
      .then(() => dbFunctions.getArtistById(2, testDb))
      .then(artist => {
        const actual = artist
        expect(actual).toEqual(expected)
      })
  })

  test('DELETE: can delete an artist', () => {
    const expected = [1, 2, 3, 4, 7, 8, 9]
    return dbFunctions.deleteArtist(6, testDb)
      .then(() => dbFunctions.getArtistsAll('id', testDb)) // remember the anonymous function here! () =>
      .then(artists => {
        const actual = artists.map(artist => artist.id)
        expect(actual).toEqual(expected)
      })
  })
})

describe('Albums database tests', () => {
  test('CREATE: can create a new album', () => {
    const newAlbum = {
      id: 9999,
      name: 'New album',
      artist: 8,
      condition: 'Good',
      notes: 'None',
      spotifyId: '6hmmX5UP4rIvOpGSaPerV8',
      image: '/images/test.jpg'
    }
    const expected = newAlbum.name
    return dbFunctions.addAlbum(newAlbum, testDb)
      .then((count) => {
        return dbFunctions.getAlbumById(newAlbum.id, testDb)
          .then(album => {
            const actual = album.name
            expect(actual).toEqual(expected)
          })
      })
  })

  test('READ: can select all albums', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return dbFunctions.getAlbumsAll('id', testDb)
      .then(albums => {
        const actual = albums.map(album => album.id)
        expect(actual).toEqual(expected)
      })
  })

  test('READ: can select album by id', () => {
    const expected = 'Heartbeat City'
    return dbFunctions.getAlbumById(9, testDb)
      .then(album => {
        const actual = album.name
        expect(actual).toEqual(expected)
      })
  })

  test('READ: can select albums by artist id', () => {
    const expected = ['Making Movies', 'Dire Straits', 'Love Over Gold']
    return dbFunctions.getAlbumsByArtist(4, 'id', testDb)
      .then(albumData => {
        const actual = albumData.map(album => album.name)

        expect(actual).toEqual(expected)
      })
  })

  test('READ: can select albums by artist id and sort by name', () => {
    const expected = ['Dire Straits', 'Love Over Gold', 'Making Movies']
    return dbFunctions.getAlbumsByArtist(4, 'name', testDb)
      .then(albumData => {
        const actual = albumData.map(album => album.name)

        expect(actual).toEqual(expected)
      })
  })

  test('UPDATE: can update an album', () => {
    const expected = 'New name for album'
    const newData = { name: 'New name for album' }
    return dbFunctions.updateAlbum(8, newData, testDb)
      .then(() => {
        dbFunctions.getAlbumById(8, testDb)
          .then(album => {
            const actual = album.name
            expect(actual).toEqual(expected)
          })
      })
  })

  test('DELETE: can delete an album by id', () => {
    const albumToDelete = 6
    const expected = [1, 2, 3, 4, 5, 7, 8, 9, 10]
    return dbFunctions.deleteAlbum(albumToDelete, testDb)
      .then(() => {
        return dbFunctions.getAlbumsAll('id', testDb)
          .then(albums => {
            const actual = albums.map(album => album.id)
            expect(actual).toEqual(expected)
          })
      })
  })
})

describe('Changelog tests run', () => {
  test('CREATE: can create a new changelog item', () => {
    const newChangelog = {
      description: 'Create a new changelog item',
      created_at: '2020-10-28',
      version: '0.0.5'
    }
    const expected = 'Create a new changelog item'
    return dbFunctions.addChangelog(newChangelog, testDb)
      .then(changeId => {
        return dbFunctions.getChangesById(changeId, testDb)
          .then(change => {
            const actual = change.description
            expect(actual).toEqual(expected)
          })
      })
  })

  test('READ: Can retrieve all changelog entries', () => {
    const expected = 4
    return dbFunctions.getChangesAll(testDb)
      .then(changes => {
        const actual = changes.length
        expect(actual).toEqual(expected)
      })
  })

  test('READ: Can retrieve a change by ID', () => {
    const changeId = 4
    const expected = 'Add route tests'
    return dbFunctions.getChangesById(changeId, testDb)
      .then(change => {
        const actual = change.description
        expect(actual).toEqual(expected)
      })
  })

  test('UPDATE: Can update a changelog', () => {
    const changeId = 4
    const changes = {
      description: 'I made a change'
    }
    const expected = changes.description
    return dbFunctions.updateChangelog(changeId, changes, testDb)
      .then(() => {
        return dbFunctions.getChangesById(changeId, testDb)
          .then(changelog => {
            const actual = changelog.description
            expect(actual).toEqual(expected)
          })
      })
  })

  test('DELETE: can delete a changelog', () => {
    const changeId = 3
    const expected = [4, 2, 1]
    return dbFunctions.deleteChangelog(changeId, testDb)
      .then(id => {
        return dbFunctions.getChangesAll(testDb)
          .then(changes => {
            const actual = changes.map(change => change.id)
            expect(actual).toEqual(expected)
          })
      })
  })
})
