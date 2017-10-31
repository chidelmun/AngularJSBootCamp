import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'default title';
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelected(param){
    console.log('header onselected: ' + param);
    this.selected.emit(param);
  }

}
