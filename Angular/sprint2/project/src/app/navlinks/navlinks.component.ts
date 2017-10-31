import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.css']
})
export class NavlinksComponent implements OnInit {
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclick(param){
    console.log('nav onclick: ' + param);
    this.selected.emit(param);
  }
}
