var express = require('express');
var bodyParser = require('body-parser');
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var directory = require('serve-index');
app.use(directory(__dirname));
app.use(express.static(__dirname));

app.set('views', __dirname);
app.set('view engine', 'pug');

app.get('/Demo', function(req, res) {
  var FirstName = req.param('FirstName');
  var LastName = req.param('LastName');
  var respondWith = '<?xml version="1.0" encoding="UTF-8"?>';
  respondWith += "<h1>Hello " + FirstName + " " + LastName + "!</h1>";
  res.status(200);
  res.setHeader('Content-type', 'text/xml');
  return res.send(respondWith);
});

app.post('/Demo', function(req, res) {
  var FirstName = req.param('FirstName');
  var LastName = req.param('LastName');
  var respondWith = '<?xml version="1.0" encoding="UTF-8"?>';
  respondWith += "<h1>Hello " + FirstName + " " + LastName + "!</h1>";
  res.status(200);
  res.setHeader('Content-type', 'text/xml');
  return res.send(respondWith);
});

app.get('/promise', function(req, res) {
  var respondWith = '<?xml version="1.0" encoding="UTF-8"?>';
  respondWith += "<h1>Hey There!</h1>";
  res.status(200);
  res.setHeader('Content-type', 'text/xml');
  return res.send(respondWith);
});



//listen on port 8080 for webserver:
app.listen(8080);