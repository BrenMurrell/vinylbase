import request from 'superagent'

const rootUrl = '/api/v1/useralbums/'

export function getUserAlbums (userId) {
  return request.get(rootUrl + userId)
    .then(res => {
      return res.body
    })
}

export function addUserAlbum (album) {
  return request.post(rootUrl)
    .send(album)
    .then(res => {
      return res.body
    })
}
