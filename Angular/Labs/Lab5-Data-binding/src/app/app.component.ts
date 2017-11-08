import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <textarea [(ngModel)]="userInput" rows="5" cols="5"> </textarea>
        <h4> Preview </h4>
        <div [innerHTML]="userInput"> </div>
        <h4> Raw Text </h4>
        <pre> {{userInput}} </pre>
  `,
})
export class AppComponent  {
    userInput:string = "Enter HTML Here";
 }
