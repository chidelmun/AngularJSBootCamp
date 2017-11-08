import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule}  from '@angular/forms';
import {Magazine}    from './magazine/magazine.component';



import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ Magazine ],
  bootstrap:    [ Magazine ]
})
export class AppModule { }
