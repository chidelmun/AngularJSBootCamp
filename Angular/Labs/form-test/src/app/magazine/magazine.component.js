"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Magazine = (function () {
    function Magazine(formBuilder) {
        this.formBuilder = formBuilder;
        //fullName = new FormControl('');
        this.editions = [{ editionCode: 1, editionName: "US", price: "10.99 USD" },
            { editionCode: 2, editionName: "FR", price: "30.49 EUR" },
            { editionCode: 3, editionName: "CMR", price: "10.99 XAF" }
        ];
        this.createForm();
    }
    Magazine.prototype.createForm = function () {
        this.magazineForm = this.formBuilder.group({
            fullName: ['', forms_1.Validators.required],
            selectedEdition: this.editions[0],
            selectedShipping: '',
            acceptPolicy: false
        });
    };
    Magazine.prototype.submitForm = function () {
        var requestedData = {
            customerName: this.magazineForm.value.fullName,
            productCode: this.magazineForm.value.selectedEdition.editionCode,
            acceptPolicy: this.magazineForm.value.acceptPolicy,
            shipMode: this.magazineForm.value.selectedShipping
        };
        alert(JSON.stringify(requestedData));
    };
    return Magazine;
}());
Magazine = __decorate([
    core_1.Component({
        selector: 'magazine',
        styles: [
            "input.ng-touched.ng-invalid{background : red;}",
            "input:required{box-shadow: none;}",
        ],
        templateUrl: './magazineHtml.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], Magazine);
exports.Magazine = Magazine;
//# sourceMappingURL=magazine.component.js.map