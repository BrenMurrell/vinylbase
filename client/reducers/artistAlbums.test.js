import artistAlbums from './artistAlbums'
import { data as allData } from './mock-data'
import { SET_ARTIST_ALBUMS, RESET_ARTIST_ALBUMS } from '../actions/albums'

const artistAlbumsData = allData.artistAlbums

describe('artistAlbums.js reducer tests', () => {
  test('initial state', () => {
    const expected = []

    const actual = artistAlbums(undefined, {})
    expect(actual).toEqual(expected)
  })

  test('can set artist albums', () => {
    const expected = artistAlbumsData.length

    const action = {
      type: SET_ARTIST_ALBUMS,
      albums: artistAlbumsData
    }

    const actual = artistAlbums(undefined, action).length

    expect(actual).toEqual(expected)
  })

  test('can reset artist albums', () => {
    const expected = []

    const action = {
      type: RESET_ARTIST_ALBUMS
    }
    const actual = artistAlbums(artistAlbumsData, action)

    expect(actual).toEqual(expected)
  })
})
