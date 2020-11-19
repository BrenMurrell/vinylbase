import { getArtists, getArtist } from '../apis/artists'

export const SET_ARTISTS = 'SET_ARTISTS'
export const SET_ARTIST = 'SET_ARTIST'

export function setArtist (artist) {
  return {
    type: SET_ARTIST,
    artist: artist
  }
}

export function fetchArtist (id) {
  return dispatch => {
    return getArtist(id)
      .then(artist => {
        dispatch(setArtist(artist))
        return null
      })
  }
}

export function setArtists(artists) {
  return {
    type: SET_ARTISTS,
    artists: artists,
  }
}

export function fetchArtists () {
  return dispatch => {
    return getArtists()
      .then(artists => {
        dispatch(setArtists(artists))
        return null
      })
  }
}