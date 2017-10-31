import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';
import { NavlinksComponent } from './navlinks/navlinks.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    NavlinksComponent,
    TodolistComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule, HttpModule, routing
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
