var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var app = express();

app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));

app.use(logger('dev'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);//Make sure you understand this line

  // will print stacktrace
if (app.get('env') === 'development') {
    throw new Error("UPPS");
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.stack + "</p>");

  });
}
//Will not print stacktrace
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>");
});
});

module.exports = app;