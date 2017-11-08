import {Component}  from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';


@Component({
selector:"magazine",
template: `
<form [formGroup]="magazineForm" (ngSubmit="submitForm()")>
    Fullname: <hr>
    <input [FormControl]="fullName" type="text"/><hr>

    Magazine Edition:<hr>
    <select [FormControl]="selectedEdition">
        <option *ngFor="let e of editions" [ngValue]="e">
            {{e.editionName}}
        </option>
    </select><hr>

    Shipping Option:<hr>
    <input type="radio" [FormControl]="selectedShipping" value="GROUND"/> GROUND
    <input type="radio" [FormControl]="selectedShipping" value="AIR"/> AIR<hr>

    <input [FormControl]="acceptPolicy" type="checkbox"/>
    I Accept the terms and conditions <hr>

    Price: <hr>
    {{magazineForm.value.selectedEdition.price}}<hr>

    <button type="submit"> Purchase </button>

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
      productCode: this.magazineForm.value.selectedEdition.editionCode,
      acceptPolicy: this.magazineForm.value.acceptPolicy,
      shipMode: this.magazineForm.value.selectedShiping
    }
    alert(JSON.stringify(requestedData));
  }

}
