import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';

export const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'list', component: TodolistComponent },
  { path: 'item/:index', component: TodoitemComponent }
];

export const routing = RouterModule.forRoot(routes);