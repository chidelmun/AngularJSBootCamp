"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var news_service_1 = require("./news.service");
var NewsList = (function () {
    function NewsList(newsServ) {
        this.newsServ = newsServ;
    }
    NewsList.prototype.getAllNews = function () {
        var result = this.newsServ.getNewsItems();
        //result.push(new News("**Nations cup coming to CMR", "FIFA announced Yesterday that the next CAF will be held in Cameroon"));
        return result;
    };
    NewsList.prototype.expandNews = function (id) {
        this.selectedNewsId = id;
        return false;
    };
    return NewsList;
}());
NewsList = __decorate([
    core_1.Component({
        selector: "news-list",
        template: "\n    <div>\n        <h2> News feed </h2>\n        <div *ngFor=\"let news of getAllNews(); let newsId = index\">\n          <h3>{{news.title}} </h3>\n          <p [ngClass]=\"{collapsed:selectedNewsId != newsId}\">\n            {{news.body}}\n          </p>\n\n          <a href (click)=\"expandNews(newsId)\" [hidden]=\"selectedNewsId == newsId\" *ngIf=\"selectedNewsId != newsId\"> More...</a>\n        </div>\n\n    </div>\n    ",
        styles: ["\n        .collapsed{\n          height:16pt;\n          overflow: hidden;\n        }\n      "],
        providers: []
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsList);
exports.NewsList = NewsList;
//# sourceMappingURL=newsList.component.js.map