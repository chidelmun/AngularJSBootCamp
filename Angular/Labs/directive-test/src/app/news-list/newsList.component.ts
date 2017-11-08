import { Component } from '@angular/core';
import {NewsService, News} from './news.service';


@Component({
    selector: "news-list",
    template : `
    <div>
        <h2> News feed </h2>
        <div *ngFor="let news of getAllNews(); let newsId = index">
          <h3>{{news.title}} </h3>
          <p [ngClass]="{collapsed:selectedNewsId != newsId}">
            {{news.body}}
          </p>

          <a href (click)="expandNews(newsId)" [hidden]="selectedNewsId == newsId" *ngIf="selectedNewsId != newsId"> More...</a>
        </div>

    </div>
    ` ,
    styles:[`
        .collapsed{
          height:16pt;
          overflow: hidden;
        }
      `],
      providers: []
})
export class NewsList {

  constructor(private newsServ: NewsService){

  }

  getAllNews(): News[]{
    let result: News[] = this.newsServ.getNewsItems();
    //result.push(new News("**Nations cup coming to CMR", "FIFA announced Yesterday that the next CAF will be held in Cameroon"));
    return result;
  }

  selectedNewsId: number;
  expandNews(id:number){
    this.selectedNewsId = id;
    return false;
  }

}
