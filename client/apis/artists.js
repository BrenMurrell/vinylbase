import request from 'superagent'

const rootUrl = '/api/v1'

export function getArtists () {
  return request.get(rootUrl + '/artists')
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
