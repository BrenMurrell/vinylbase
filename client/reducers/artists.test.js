import { SET_ARTISTS, ADD_ARTIST, RESET_ARTISTS, DELETE_ARTIST } from '../actions/artists'
import { data as allData } from './mock-data'
import artists from './artists'
const data = allData.artists

jest.retryTimes(0);

describe('artist.js reducer tests', () => {
  test('initial state', () => {
    const expected = []
    const actual = artists(undefined, {})
    expect(actual).toEqual(expected)
  })

  test('can set initial artists', () => {
    const expected = data.length
    const action = {
      type: SET_ARTISTS,
      artists: data
    }
    const actual = artists(undefined, action).length
    expect(actual).toEqual(expected)
  })

  test('can add a new artist', () => {
    const expected = data.length + 1

    const action = {
      type: ADD_ARTIST,
      artist: allData.artist
    }

    const actual = artists(data, action).length
    expect(actual).toEqual(expected)
  })

  test('can reset artists list', () => {
    const expected = []
    const action = {
      type: RESET_ARTISTS
    }
    const actual = artists(data, action)
    expect(actual).toEqual(expected)
  })

  test('can delete an artist', () => {
    const expected = data.length - 1

    const artistId = data[0].id

    const action = {
      type: DELETE_ARTIST,
      artistId
    }

    const actual = artists(data, action).length

    expect(actual).toEqual(expected)
  })
})