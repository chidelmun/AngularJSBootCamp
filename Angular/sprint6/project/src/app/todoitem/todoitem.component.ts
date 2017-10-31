import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() title: string;
  @Input() selectedItem: number = 0;
  todoitems: { 'title': string, 'description': string, 'due': string, 'done': boolean}[] = [];
  item: { 'id': number, 'title': string, 'description': string, 'due': string, 'done': boolean} =
  { 'id': 0, 'title': 'title', 'description': 'description', 'due': 'due date', 'done': false };

 constructor(private todoSvc: TodoService, 
  private router: Router,
  private aroute: ActivatedRoute ) {}

  ngOnInit() {
    const id = this.aroute.snapshot.params['index'];
    this.todoSvc.getTodoItem(id).subscribe(
      response => {
        console.log('status: ' + response.status);
        if (response.status !== 200) {
          this.item = { 'id': 0, 'title': 'title', 'description': 'description', 'due': 'due date', 'done': false };
        } else {
          this.item = response.json();
        }
      },
      error => {
        alert('There was a problem getting data.');
      });
  }

  onSave() {
    this.todoSvc.updateTodo(this.item).subscribe(
      (response) => {
        const result = response.json();
        console.log('onSave result: ' + JSON.stringify(result));
        this.router.navigate(['\list']);
      }
      );
  }

  onDelete() {
    this.todoSvc.deleteTodo(this.item).subscribe(
      (response) => {
        const result = response.json();
        console.log('onDelete result: ' + JSON.stringify(result));
        this.router.navigate(['\list']);
      }
      );
  }

  onCancel() {
    this.router.navigate(['\list']);
  }
}
