const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerS3 = require('multer-s3')
const fs = require('fs')
const AWS = require('aws-sdk');


// Amazon s3 config
const s3 = new AWS.S3();
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
  return db.getAlbumsAll()
    .then(albums => {
      res.json(albums)
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
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getAlbumById(id)
    .then(album => {
      res.json(album)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/upload', upload.single('album_art'), function(req, res, next) {
  res.send(req.file.location)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteAlbum(id)
    .then(rows => {
      res.json(rows)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router