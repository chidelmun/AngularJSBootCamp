import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.css']
})
export class NavlinksComponent implements OnInit {
  @Input() path: string = 'list';
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclick(param) {
    console.log('nav onclick: ' + param);
    this.path = param;
    this.selected.emit(param);
  }
}
