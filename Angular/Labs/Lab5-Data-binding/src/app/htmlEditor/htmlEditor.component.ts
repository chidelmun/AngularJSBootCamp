import { Component } from '@angular/core';

@Component({
  selector: 'text-editor',
  template: `
        <textarea [(ngModel)]="userInput" rows="5" cols="5"> </textarea>
        <h4> Preview </h4>
        <div [innerHTML]="userInput"> </div>
        <h4> Raw Text </h4>
        <pre> {{userInput}} </pre>
  `,
})
export class HtmlEditor  {
    userInput:string = "Enter HTML Here";
 }
