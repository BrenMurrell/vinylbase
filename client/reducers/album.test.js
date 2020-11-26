import album from './album'
import { data as allData } from './mock-data'
import { SET_ALBUM, RESET_ALBUM } from '../actions/albums'

const initialState = allData.album

describe('album.js reducer tests', () => {
  test('initial state', () => {
    const expected = {}
    const actual = album(undefined, {})
  
    expect(actual).toEqual(expected)
  })

  test('can set single album', () => {
    const albumData = allData.album
    const expected = albumData.name

    const action = {
      type: SET_ALBUM,
      album: albumData
    } 
    const actual = album(undefined, action).name

    expect(actual).toEqual(expected)
  })

  test('can reset single album state', () => {
    const expected = {}
    const action = {
      type: RESET_ALBUM
    }
    const actual = album(initialState, action)
    expect(actual).toEqual(expected)
  })

})
