const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())
// GET /api/v1/welcome/
router.get('/', (req, res) => {
  return request
    .get('https://deckofcardsapi.com/api/deck/e5x3wjmn7ssd/shuffle')
    .then(resp => {
      return request
        .get('https://deckofcardsapi.com/api/deck/e5x3wjmn7ssd/draw/?count=1')
        .then(resp => {
          console.log(resp.body.remaining)
          res.json(resp.body.cards)
        })
    })
})

module.exports = router
