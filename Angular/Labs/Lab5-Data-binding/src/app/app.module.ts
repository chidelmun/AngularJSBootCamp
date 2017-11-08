import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import { HtmlEditor }  from './htmlEditor/htmlEditor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ HtmlEditor ],
  bootstrap:    [ HtmlEditor ]
})
export class AppModule { }
