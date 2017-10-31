import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  display = 'list'; // [list, item]
  selectedItem = 0;
  displaySelectedItem(param) {
    console.log('app display selected: ' + param);
    this.selectedItem = param;
    this.display = 'item';
  }
  selectView(param) {
    console.log('app selectview: ' + param);
    this.display = param;
  }
}
