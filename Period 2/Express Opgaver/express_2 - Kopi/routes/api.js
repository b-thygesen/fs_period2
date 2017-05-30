var express = require('express');
var router = express.Router();
var joke = require('../model/jokes.js');

router.get('/joke', function(req, res, next) {
  res.send(joke.getRandomJoke());
});

router.get('/alljokes', function(req, res, next) {
  res.send(joke.allJokes);
});

router.post('/addjoke', function(req, res, next) {
  res.send(joke.addJoke(req.body.joke));
});

module.exports = router;