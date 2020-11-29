const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')

// Amazon s3 config
const s3 = new AWS.S3()
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
)
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'vinylbase',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, 'images/' + file.originalname)
    }
  })
})

const db = require('../db/dbFunctions')

router.get('/', (req, res) => {
  let albumsObj = []
  return db.getAlbumsAll()
    .then(albums => {
      albumsObj = albums
      return db.getArtistsAll()
        .then(artists => {
          albumsObj.map(album => {
            album.artistData = artists.filter(artist => artist.id === album.artist)[0]
          })
          return res.json(albumsObj)
        })
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const album = req.body
  return db.addAlbum(album)
    .then(ids => {
      res.json(ids[0])
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  let albumObj = {}
  return db.getAlbumById(id)
    .then(album => {
      albumObj = album
      return db.getArtistById(album.artist)
        .then(artist => {
          albumObj.artist_name = artist.name
          return res.json(albumObj)
        })
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/upload', upload.single('album_art'), function (req, res, next) {
  res.send(req.file.location)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteAlbum(id)
    .then(rows => {
      return res.json(rows)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
