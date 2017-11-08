import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component({
    selector: 'magazine',
    styles: [
              "input.ng-touched.ng-invalid{background : red;}",
              "input:required{box-shadow: none;}",
    ],
    templateUrl: './magazineHtml.component.html',
})
export class Magazine{
  constructor(private formBuilder: FormBuilder){
    this.createForm();
  }

  //fullName = new FormControl('');
  editions = [{editionCode: 1, editionName: "US", price: "10.99 USD"},
              {editionCode: 2, editionName: "FR", price: "30.49 EUR"},
              {editionCode: 3, editionName: "CMR", price: "10.99 XAF"}
            ];
  //selectedEdition = new FormControl(this.editions[0]);
  //selectedShipping = new FormControl('');
  //acceptPolicy =  new FormControl(false);

  magazineForm: FormGroup;

  createForm(){
    this.magazineForm = this.formBuilder.group({
        fullName: ['', Validators.required],
        selectedEdition: this.editions[0],
        selectedShipping: '',
        acceptPolicy:false
    });
  }

  submitForm(){
    let requestedData ={
      customerName: this.magazineForm.value.fullName,
      productCode: this.magazineForm.value.selectedEdition.editionCode,
      acceptPolicy: this.magazineForm.value.acceptPolicy,
      shipMode: this.magazineForm.value.selectedShipping
    }
    alert(JSON.stringify(requestedData));
  }
}
