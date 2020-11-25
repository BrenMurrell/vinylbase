import { SET_ARTISTS, ADD_ARTIST, RESET_ARTISTS, DELETE_ARTIST } from '../actions/artists'
import { data as allData } from './mock-data'
import artists from './artists'
const data = allData.artists

describe('artist.js reducer tests', () => {
  test('initial state', () => {
    const expected = []
    const actual = artists(undefined, {})
    expect(actual).toEqual(expected)
  })

  test('can add artists', () => {
    const expected = data.length
    const action = {
      type: SET_ARTISTS,
      artists: data
    }
    const actual = artists(undefined, action).length
    expect(actual).toEqual(expected)
  })
})