var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var directory = require('serve-index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var sqlite3 = require('sqlite3').verbose();

app.set('views', __dirname);
app.set('view engine', 'pug');

var db = new sqlite3.Database('Northwind.sqlite');

app.get('/EmployeeList', function(req, res) {
  db.all("SELECT EmployeeID, FirstName, LastName FROM Employees", function(err, row) {
    if (err !== null) {
      res.status(500).send("An error has occurred -- " + err);
    } else {
      res.render('EmployeeList.pug', {
        employees: row
      }, function(err, html) {
        res.status(200).send(html)
      });
    }
  });
});

app.post('/EditEmployee', function(req, res) {
  var eid = req.param('eid');
  var field = req.param('field');
  var value = req.param('value');
  var q = "UPDATE Employees SET " + field + "='" + value + "' WHERE EmployeeID = " + eid;
  db.run(q);
  res.status(200).send('ok');
});

app.post('/EmployeeForm', function(req, res) {
  var eid = req.param('eid'); //req.body.eid;
  var q = "SELECT EmployeeID, FirstName, LastName, Title, Extension FROM Employees WHERE EmployeeID = " + eid;
  db.get(q, function(err, row) {
    if (err !== null) {
      res.status(500).send("An error has occurred -- " + err);
    } else {
      res.render('EmployeeForm.pug', {
        employee: row
      }, function(err, html) {
        res.status(200).send(html)
      });
    }
  });
});

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

app.use(directory(__dirname));
app.use(express.static(__dirname));

app.listen(8080);