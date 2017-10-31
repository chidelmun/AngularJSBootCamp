import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Todo } from './Todo';
@Injectable()
export class TodoService {

  constructor(private http: Http ) {}

  getTodoItems() {
    return this.http.get('http://localhost:3010/todos');
  }

  getTodoItem(id) {
    return this.http.get(`http://localhost:3010/todos/${id}`);
  }

  addTodo(todotext: string) {
    const body = JSON.stringify({ title: todotext });
    console.log('addTodo body: ' + body);
    const headers = new Headers( {'Content-Type' : 'application/json' } );
    const opts = new RequestOptions();
    opts.headers = headers;
    return this.http.post('http://localhost:3010/todos', body, opts);
  }

  updateTodo(todoItem: Object ) {
    const body = JSON.stringify(todoItem);
    console.log('updateTodo body: ' + body);
    const headers = new Headers( {'Content-Type' : 'application/json' } );
    const opts = new RequestOptions();
    opts.headers = headers;
    const url = `http://localhost:3010/todos/$(todoItem.id)`;
    return this.http.put(url, body, opts);
  }

  deleteTodo(todoItem: Todo ) { 
    const url = `http://localhost:3010/todos/${ todoItem.id }`;
    console.log('deleteTodo id: ' + url );
    return this.http.delete(url);
  }

}
