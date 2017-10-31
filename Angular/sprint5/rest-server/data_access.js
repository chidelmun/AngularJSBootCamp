var fs = require('fs');
var Todos = JSON.parse(fs.readFileSync('./rest-server/data.json', 'utf8'));
var nextIndex = 0;

Todos.map(
	(item, index) => {
		item.id = index + 100;
	}
)

console.log( "todos length: " + Todos.length);


module.exports.getAllTodos = function() {
  return Todos;
};

var findTodoIndex = function(id) {
	for (i = 0; i < Todos.length; i++) { 
		if (Todos[i].id == id) {
			return i;
		}
	}
	return -1;
}

module.exports.findTodo = function(id) {
	index = findTodoIndex(id);
	if (index != -1) {
		return Todos[index];
	}
	return null;
};

module.exports.updateTodo = function(id, todo) {
	index = findTodoIndex(id);
	if (index != -1) {
		Todos[index] = todo;
	}
	return todo;
};

module.exports.insertTodo = function(title) {
	console.log('insertTodo title: ' + title);
	nextIndex = nextIndex + 1;
	let Todo = {id:nextIndex, due:'', done: false, title: title, description: ''};
	Todos.push(Todo);
	return nextIndex;
};

module.exports.deleteTodo = function(id) {
	index = findTodoIndex(id);
	if (index != -1) {
		Todos.splice(index, 1);
	}
};