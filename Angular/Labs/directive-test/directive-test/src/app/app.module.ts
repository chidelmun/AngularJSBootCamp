import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsList } from './news-list/newsList.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations:  [ NewsList ],
  bootstrap:     [ NewsList ]
})
export class AppModule { }
