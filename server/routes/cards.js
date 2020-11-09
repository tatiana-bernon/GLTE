const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())
// GET /api/v1/welcome/
router.get('/', (req, res) => {
  return request
    .get('https://deckofcardsapi.com/api/deck/ldadm9x9guqt/shuffle')
    .then(resp => {
      return request
        .get('https://deckofcardsapi.com/api/deck/ldadm9x9guqt/draw/?count=1')
        .then(resp => {
          console.log(resp.body.remaining)
          res.json(resp.body.cards)
        })
    })
})

module.exports = router
