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

app.post('/AjaxQuiz', function(req, res) {
  var strJSON = req.param('strJSON');
  var objJSON = JSON.parse(strJSON);
  var question = objJSON.question;
  var answer = objJSON.answer;
  var respondWith = '';
  switch (question) {
    case "q1":
      if (answer == 2)
        respondWith = "Right";
      else
        respondWith = "Wrong";
      break;
    case "q2":
      if (answer == 3)
        respondWith = "Right";
      else
        respondWith = "Wrong";
      break;
    case "q3":
      if (answer == 1)
        respondWith = "Right";
      else
        respondWith = "Wrong";
      break;
    default:
      respondWith = "failed";
  }
  res.status(200);
  return res.send(respondWith);
});


app.post('/AjaxQuiz-challenge', function(req, res) {
  var strJSON = req.param('strJSON');
  var objJSON = JSON.parse(strJSON);
  var answers = objJSON.answers;
  var correctAnswers = [2, 3, 1];
  var results = {};

  for (var i = 0; i < answers.length; i = i + 1) {
    var q = i + 1;
    if (answers[i] === null)
      results["q" + q] = "Unanswered";
    else if (answers[i] == correctAnswers[i])
      results["q" + q] = "Right";
    else
      results["q" + q] = "Wrong";
  }

  var respondWith = results;

  res.status(200);
  return res.send(respondWith);
});

app.use(directory(__dirname));
app.use(express.static(__dirname));

//listen on port 8080 for webserver:
app.listen(8080);