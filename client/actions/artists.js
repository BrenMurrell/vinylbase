import { getArtists, getArtist, addArtist, deleteArtist } from '../apis/artists'

export const SET_ARTISTS = 'SET_ARTISTS'
export const SET_ARTIST = 'SET_ARTIST'
export const ADD_ARTIST = 'ADD_ARTIST'
export const RESET_ARTISTS = 'RESET_ARTISTS'
export const DELETE_ARTIST = 'DELETE_ARTIST'

export function setArtist (artist) {
  return {
    type: SET_ARTIST,
    artist: artist
  }
}

export function insertArtist (artist) {
  return () => {
    return addArtist(artist)
      .then(() => {
        return null
      })
  }
}

export function removeArtist (artistId) {
  return dispatch => {
    return deleteArtist(artistId)
      .then((num) => {
        return null
      })
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