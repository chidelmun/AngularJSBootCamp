var express = require('express');
var bodyParser = require('body-parser');
var dao = require("./data_access");

var app = express();

app.use(bodyParser.json()); //Parse JSON body

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use("/", express.static(__dirname + '/..'));
// add node_modules route since addition of 'src' directory
app.use("/node_modules", express.static(__dirname + '/../../node_modules'));

// find book
app.get("/todos/:id", function(req, res) {
  var todo = dao.findTodo(req.params.id);

  if (todo === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(todo);
  }
});

//insert book
app.post("/todos", function(req, res) {
  console.log("rest-service app.post: " + JSON.stringify(req.body) );
  if (req.body === undefined ) {
    res.statusCode = 500;
    res.end();
    return;
  }
  const index = dao.insertTodo(req.body.title);
  var todo = {};
  todo['title'] = req.body.title;
  todo['id'] = index;
  todo['description'] = '';
  const reply = JSON.stringify(todo);
  console.log("rest-service reply: " + reply );
  res.write(reply);
  res.end();
});

//update book
app.put("/todos/:id", function(req, res) {
  if (req.params.id === undefined || req.body === undefined) {
      res.statusCode = 500;
      res.end();
      return;
    }
    const todo = dao.updateTodo(req.body.id, req.body);
    const reply = JSON.stringify(todo);
    console.log("rest: update reply: " + reply );
    res.write(reply);
    res.end();    

  dao.updateTodo(req.params.id, req.body);
  res.end();
});

// delete book
app.delete("/todos/:id", function(req, res) {
  dao.deleteTodo(req.params.id);
  res.write('{}');
  res.end();
});


// all books
app.get("/todos", function(req, res) {
  console.log("request /todos");
  var todos = dao.getAllTodos();
  res.send(todos);
});

const port = 3010;
console.log('Open a browser to http://localhost:'+port+' to view the application');

app.listen(port);