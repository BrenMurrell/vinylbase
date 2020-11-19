import request from 'superagent'

const rootUrl = '/api/v1'

export function getAlbums () {
  return request.get(rootUrl + '/albums')
    .then(res => {
      return res.body
    })
}

export function getAlbum (id) {
  return request.get(rootUrl + '/albums/' + id)
    .then(res => {
      return res.body
    })
}
