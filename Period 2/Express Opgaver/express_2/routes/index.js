var express = require('express');
var router = express.Router();
var joke = require('../model/jokes.js');
var session = require("express-session");

// Count variables
var jokeCount = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the fronpage ' + session.username });
});

router.get('/joke', function(req, res, next) {
  req.session.jokeCount = ++jokeCount;
  res.render('joke', {
    joke: joke.getRandomJoke,
    username: session.username,
    jokeCount: jokeCount });
});

router.get('/alljokes', function(req, res, next) {
  res.render('alljokes', { jokes: joke.allJokes });
});

router.get('/addjoke', function(req, res, next) {
  res.render('addjoke', {jokes: joke.allJokes });
});

router.post('/addjoke', function(req, res, next) {
  joke.addJoke(req.body.addjoke);
  res.redirect('/addjoke');
})

module.exports = router;