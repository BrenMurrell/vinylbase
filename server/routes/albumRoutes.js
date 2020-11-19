const express = require('express')
const router = express.Router()

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

module.exports = router