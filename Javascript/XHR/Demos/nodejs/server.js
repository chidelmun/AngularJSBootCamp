var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var directory = require('serve-index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//var sqlite3 = require('sqlite3').verbose();

//use Jade templating engine:
app.set('views', __dirname);
app.set('view engine', 'pug');


app.get('/HelloWorld', function(req, res) {
  var name = req.param('name') || 'Somebody';
  var respondWith = '<?xml version="1.0" encoding="UTF-8"?>';
  respondWith += "<h1>Hello " + name + "!</h1>";
  res.status(200);
  res.setHeader('Content-type', 'text/xml');
  return res.send(respondWith);
});

app.get('/HelloWorldPug', function(req, res) {
  var name = req.param('name') || 'Somebody';
  res.render('HelloWorld.pug', {
    'name': name
  }, function(err, html) {
    if (err) {
      res.redirect('/404');
    } else {
      res.status(200).send(html);
    }
  });
});

//allow for directory browsing:
app.use(directory(__dirname));
app.use(express.static(__dirname));

//web server listens on port 8080:
app.listen(8080);