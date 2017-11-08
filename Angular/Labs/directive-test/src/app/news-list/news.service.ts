import {Injectable} from '@angular/core';

@Injectable()
export class NewsService{
  newsItems: News[] = [
      new News("BMW Researching Self-Driving Cars","We failed to anticipate how difficult it would be to program even the most sophisticated computers available today to emulate the selfish and asinine behaviour of the typical BMW driver. We ended up sending our software team to a psychiatric hospital to interview some pathological narcissists."),
      new News("Man Playing Pokémon Go App Eaten By Lions", "Kenya, Africa - The instant addiction to the new Pokémon Go game has already reached all corners of the globe, causing its players all sorts of unique injuries in pursuit of hunting Pokémon."),
      new News("Amazon buys Rhode Island", "In a move that will surely mark the beginning of the New World Order, Amazon has purchased the entire state of Rhode Island to be its western hemisphere distribution center."),
      new News("Telsa Motors Unveils Coal-Powered SUV", "PALO ALTO, CA - Telsa Motors' CEO, Ellen Mush, announced their next green vehicle - The Telsa Model C. The model C is the first coal-powered vehicle since the 1884 Trepardeux. It was a coal fired steam propelled carriage."),
      new News("Man missing found", "The Nigerian Police just found a man declared missing 15 years ago. Aku Ekele, was missing from December 2014 ...")
  ] ;

//   [
// {
//     title: "BMW Researching Self-Driving Cars",
//     body: "We failed to anticipate how difficult it would be to program even the most sophisticated computers available today to emulate the selfish and asinine behaviour of the typical BMW driver. We ended up sending our software team to a psychiatric hospital to interview some pathological narcissists."
// },
// {
//     title: "Man Playing Pokémon Go App Eaten By Lions",
//     body: "Kenya, Africa - The instant addiction to the new Pokémon Go game has already reached all corners of the globe, causing its players all sorts of unique injuries in pursuit of hunting Pokémon."
// },
// {
//     title: "Amazon buys Rhode Island",
//     body: "In a move that will surely mark the beginning of the New World Order, Amazon has purchased the entire state of Rhode Island to be its western hemisphere distribution center."
// },
// {
//     title: "Telsa Motors Unveils Coal-Powered SUV",
//     body: "PALO ALTO, CA - Telsa Motors' CEO, Ellen Mush, announced their next green vehicle - The Telsa Model C. The model C is the first coal-powered vehicle since the 1884 Trepardeux. It was a coal fired steam propelled carriage."
// }
// ];

getNewsItems() : News[]{
    return this.newsItems;
}


}

export class News{
  title: string;
  body: string;
  constructor(title: string, body: string){
     this.title = title;
     this.body = body;
  }
}
