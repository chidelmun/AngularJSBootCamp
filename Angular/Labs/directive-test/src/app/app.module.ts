import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsList } from './news-list/newsList.component';
import {NewsService} from './news-list/news.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations:  [ NewsList ],
  bootstrap:     [ NewsList ],
  providers: [NewsService]
})
export class AppModule { }
