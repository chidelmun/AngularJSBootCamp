import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() title: string;
  @Input() selectedItem: number = 0;
  todoitems: { 'title': string, 'description': string, 'due': string, 'done': boolean}[] = [];
  item: { 'title': string, 'description': string, 'due': string, 'done': boolean} =
  { 'title': 'title', 'description': 'description', 'due': 'due date', 'done': false };

 constructor(private todoSvc: TodoService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.todoSvc.getTodoItems().subscribe(
      response => { this.todoitems = response.json(); 
        const idx = this.route.snapshot.params['index'];
        this.item = this.todoitems[idx];
      },
      error => {
        alert('There was a problem getting data.');
      });
  }

}
