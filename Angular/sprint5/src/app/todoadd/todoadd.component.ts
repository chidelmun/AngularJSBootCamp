import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoadd',
  template: `
  <div>
  <input type=text
     [(ngModel)] = 'todotext'
     placeholder='enter todo text...' />
  <button (click)='onAdd()'>Add Todo</button>
  </div>`,
  styleUrls: ['./todoadd.component.css']
})
export class TodoAddComponent implements OnInit {
  @Output() newtodo = new EventEmitter();
  todotext: string = '';

  constructor(private todoSrv: TodoService, private router: Router) { }

  ngOnInit() {
  }

  onAdd() {
    this.todoSrv.addTodo(this.todotext).subscribe(
    (response) => {
      const result = response.json();
      console.log('footer result: ' + JSON.stringify(result));
      // add result to todos list locally
      this.newtodo.emit(result);
    }
    );
    this.todotext = '' ;
  }

}
