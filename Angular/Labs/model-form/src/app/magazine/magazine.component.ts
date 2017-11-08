import {Component}  from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';



@Component({
selector:"magazine",
template: `
<form [FormGroup]="magazineForm" (ngSubmit)="submitForm()">
    Full name : <br>
    <input [formControl]="fullName" type="text"/> </br>

    Magazine Edition: </br>
    <select [formControl]="selectedEdition">
        <option *ngFor="let e of editions" [ngValue]="e">
            {{e.editionName}}
        </option>
    </select>

    Shipping Option: </br>
    <input type="radio" [formControl]="selectedShipping" value="Ground"/> Ground </br>
    <input type="radio" [formControl]="selectedShipping" value="Air"/> Air </br>

    <input [formControl]="acceptPolicy" type="checkbox" />
        I accept the terms and conditions </br>

    Price: {{magazineForm.value.selectedEdition.price}}
  </br>

   <button type="submit">  Purchase </button>
</form>
`,
styles: ["input.ng-touched.ng-invalid {background: red;}",
        "input:required {box-shadow: none;}",
  ]

})
export class Magazine{

constructor(){
  this.createForm();
}


  fullName = new FormControl('');
  editions = [{editionCode : 1, editionName: "US", price : "10.99 USD"},
              {editionCode : 2, editionName: "CANADA", price : "14.99 CAD"},
              {editionCode : 3, editionName: "FRANCE", price : "23.99 EUR"},
              {editionCode : 4, editionName: "CMR", price : "500.00 XAF"}
  ];

  selectedEdition = new FormControl(this.editions[0]);
  selectedShipping = new FormControl('');
  acceptPolicy = new FormControl(false);
  magazineForm: FormGroup;

  createForm(){
    this.magazineForm = new FormGroup({
        fullName: this.fullName,
        selectedEdition: this.selectedEdition,
        selectedShipping: this.selectedShipping,
        acceptPolicy: this.acceptPolicy
    });
  }

  submitForm(){
    let requestedData = {
      customerName: this.magazineForm.value.fullName,
      productCode:this.magazineForm.value.selectedEdition.editionCode,
      acceptPolicy: this.magazineForm.value.acceptPolicy,
      shipMode: this.magazineForm.value.selectedShipping
    }
    alert(JSON.stringify(requestedData));
  }

}
