import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [TodoService]
})
export class TodolistComponent implements OnInit {
  @Input() title: string = 'ToDo List';
  searchTerm: string = '';
  applySearch: boolean = true;
  showCompleted: boolean = false;
 
  todolist:
  { 'id': number, 'title': string, 'description': string, 'due': string, 'done': boolean }[];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.todoSvc.getTodoItems().subscribe(
      response => {
        // this.todolist = response.json();
        this.todolist = response.json().sort(
          ( a, b ) =>  (a.id - b.id)
         );
      },
      error => {
        alert(error + ' There was a problem getting data.');
      });
  }

  onNewTodo(event) {
    console.log('list onNewTodo: ' + JSON.stringify(event));
    this.updateList();
  }
}
