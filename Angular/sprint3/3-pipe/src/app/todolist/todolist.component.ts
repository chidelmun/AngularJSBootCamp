import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input() title: string = 'ToDo List';
  searchTerm: string = '';
  disableSearch: boolean = true;
  todolist:
  { 'title': string, 'description': string, 'due': string, 'done': boolean }[];

  constructor(private todoSvc: TodoService) {
    todoSvc.getTodoItems().subscribe(
      response => { this.todolist = response.json(); },
      error => {
        alert('There was a problem getting data.');
      });
  }
  ngOnInit() {
  }

}
