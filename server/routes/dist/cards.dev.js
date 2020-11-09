"use strict";

var express = require('express');

var request = require('superagent');

var router = express.Router();
router.use(express.json()); // GET /api/v1/welcome/

router.get('/', function (req, res) {
  return request.get("https://deckofcardsapi.com/api/deck/ldadm9x9guqt/ra/?count=1").then(function (resp) {
    console.log(resp.body.remaining);
    res.json(resp.body.cards);
  });
});
module.exports = router;