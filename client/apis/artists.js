import request from 'superagent'

const rootUrl = '/api/v1/artists'

export function getArtists () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function deleteArtist (id) {
  return request.delete(rootUrl + '/' + id)
    .then(res => {
      return res.body
    })
}

export function getArtist (id) {
  return request.get(rootUrl + '/' + id)
    .then(res => {
      return res.body
    })
}

export function addArtist (artist) {
  return request.post(rootUrl)
    .send(artist)
    .then(res => {
      return res.body
    })
}
