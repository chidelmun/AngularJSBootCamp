"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NewsList = (function () {
    function NewsList() {
        this.newsItems = [
            {
                title: "BMW Researching Self-Driving Cars",
                body: "We failed to anticipate how difficult it would be to program even the most sophisticated computers available today to emulate the selfish and asinine behaviour of the typical BMW driver. We ended up sending our software team to a psychiatric hospital to interview some pathological narcissists."
            },
            {
                title: "Man Playing Pokémon Go App Eaten By Lions",
                body: "Kenya, Africa - The instant addiction to the new Pokémon Go game has already reached all corners of the globe, causing its players all sorts of unique injuries in pursuit of hunting Pokémon."
            },
            {
                title: "Amazon buys Rhode Island",
                body: "In a move that will surely mark the beginning of the New World Order, Amazon has purchased the entire state of Rhode Island to be its western hemisphere distribution center."
            },
            {
                title: "Telsa Motors Unveils Coal-Powered SUV",
                body: "PALO ALTO, CA - Telsa Motors' CEO, Ellen Mush, announced their next green vehicle - The Telsa Model C. The model C is the first coal-powered vehicle since the 1884 Trepardeux. It was a coal fired steam propelled carriage."
            }
        ];
    }
    NewsList.prototype.expandNews = function (id) {
        this.selectedNewsId = id;
        return false;
    };
    return NewsList;
}());
NewsList = __decorate([
    core_1.Component({
        selector: "news-list",
        template: "\n    <div>\n        <h2> News feed </h2>\n        <div *ngFor=\"let news of newsItems; let newsId = index\">\n          <h3>{{news.title}} </h3>\n          <p [ngClass]=\"{collapsed:selectedNewsId != newsId}\">\n            {{news.body}}\n          </p>\n\n          <a href (click)=\"expandNews(newsId)\" [hidden]=\"selectedNewsId == newsId\" *ngIf=\"selectedNewsId != newsId\"> More...</a>\n        </div>\n    </div>\n    ",
        styles: ["\n        .collapsed{\n          height:16pt;\n          overflow: hidden;\n        }\n      "]
    })
], NewsList);
exports.NewsList = NewsList;
//# sourceMappingURL=newsList.component.js.map