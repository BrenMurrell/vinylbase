import request from 'superagent'

const rootUrl = '/api/v1'

export function getArtists () {
  return request.get(rootUrl + '/artists')
    .then(res => {
      return res.body
    })
}

export function deleteArtist (id) {
  return request.delete(rootUrl + '/artists/' + id)
    .then(res => {
      return res.body
    })
}

export function getArtist (id) {
  return request.get(rootUrl + '/artists/' + id)
    .then(res => {
      return res.body
    })
}

export function addArtist (artist) {
  return request.post(rootUrl + '/artists')
    .send(artist)
    .then(res => {
      return res.body
    })
}
