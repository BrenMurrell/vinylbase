import artist from './artist'
import { data as allData } from './mock-data'
import { SET_ARTIST, RESET_ARTIST } from '../actions/artists'

const artistData = allData.artist

describe('artist.js reducer tests', () => {
  test('initial state', () => {
    const expected = {}
    const actual = artist(undefined, {})

    expect(actual).toEqual(expected)
  })

  test('can set a single artist', () => {
    const expected = artistData.name

    const action = {
      type: SET_ARTIST,
      artist: artistData
    }
    const actual = artist(undefined, action).name

    expect(actual).toEqual(expected)
  })

  test('can reset single artist state', () => {
    const expected = {}
    const action = {
      type: RESET_ARTIST
    }
    const actual = artist(artistData, action)
    expect(actual).toEqual(expected)
  })
})
