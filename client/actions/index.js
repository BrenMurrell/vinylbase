import { getArtists } from '../apis/artists'

export const SET_ARTISTS = 'SET_ARTISTS'

export function setArtists (artists) {
  return {
    type: SET_ARTISTS,
    artists
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
