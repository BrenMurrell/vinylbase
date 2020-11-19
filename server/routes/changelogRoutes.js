const express = require('express')
const router = express.Router()

const db = require('../db/dbFunctions')

router.get('/', (req, res) => {
  return db.getChangesAll()
    .then(changes => {
      res.json(changes)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router