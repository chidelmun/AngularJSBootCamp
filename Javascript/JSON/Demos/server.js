var express = require('express');
var bodyParser = require('body-parser');
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var directory = require('serve-index');


var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('Northwind.sqlite');

app.set('views', __dirname);


app.get('/Employees', function(req, res) {
  db.serialize(function() {
    var NumEmployees = 0;
    db.get("SELECT COUNT(EmployeeID) AS NumEmployees FROM Employees", function(err, row) {
      if (err !== null) {
        res.status(500).send("An error has occurred -- " + err);
      } else {
        NumEmployees = row.NumEmployees;
      }
    });
    res.setHeader('Content-type', 'text/xml');
    db.all("SELECT EmployeeID, FirstName, LastName, Title, BirthDate, HireDate, Extension FROM Employees", function(err, row) {
      if (err !== null) {
        res.status(500).send("An error has occurred -- " + err);
      } else {
        res.render('Employees.xml.jade', {
          employees: row,
          NumEmployees: NumEmployees
        }, function(err, xml) {
          res.status(200).send(xml);
        });
      }
    });
  });

});

app.post('/ReceiveJSON', function(req, res) {
  var strJSON = req.param('strJSON');
  objJSON = JSON.parse(strJSON);
  if (objJSON.msg == "Hi There!") {
    respondWith = "And hi there to you!";
  } else {
    respondWith = "Later Gator!";
  }
  res.status(200);
  return res.send(respondWith);
});

app.use(directory(__dirname));
app.use(express.static(__dirname));

//listen on port 8080 for webserver:
app.listen(8080);