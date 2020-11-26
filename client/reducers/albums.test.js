import albums from './albums'
import { data as allData } from './mock-data'
import { SET_ALBUMS, ADD_ALBUM, DELETE_ALBUM, RESET_ALBUMS } from '../actions/albums'

const initialState = allData.albums
describe('albums.js reducer tests', () => {

  test('initial state', () => {
    const expected = 0
    const actual = albums(undefined, {}).length
  
    expect(actual).toEqual(expected)
  })
  
  test('set albums', () => {
    const expected = initialState.length;

    const action = {
      type: SET_ALBUMS,
      albums: initialState
    }

    const actual = albums(undefined, action).length
    expect(actual).toEqual(expected)
  })

  test('add album', () => {
    const expected = 'Dark Side of the Moon'
  
    const album = {
      "id": 200,
      "name": "Dark Side of the Moon",
      "artist": 1,
      "condition": "Average",
      "notes": "Vinyl in okay condition, sleeve fairly tatty.",
      "image": "https://vinylbase.s3.amazonaws.com/images/darkside.jpg",
      "spotifyId": "4LH4d3cOWNNsVw41Gqt2kv"
    }
    const action = {
      type: ADD_ALBUM,
      album
    }
  
    const newList = albums(initialState, action)
  
    const foundAlbum = newList.filter(a => a.id == album.id)
    const actual = foundAlbum[0].name
    expect(actual).toEqual(expected)
  })
  
  test('delete album', () => {
    const expected = initialState.length - 1

    const albumId = initialState[0].id

    const action = {
      type: DELETE_ALBUM,
      albumId
    }

    const actual = albums(initialState, action).length

    expect(actual).toEqual(expected)
  })

  test('can reset albums list', () => {
    const expected = []

    const action = {
      type: RESET_ALBUMS
    }
    const actual = albums(initialState, action)
    expect(actual).toEqual(expected)
  })
})