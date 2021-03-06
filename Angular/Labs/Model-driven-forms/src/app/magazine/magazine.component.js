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
    function Magazine() {
        this.fullName = new forms_1.FormControl('');
        this.editions = [{ editionCode: 1, editionName: "US", price: "10.99 USD" },
            { editionCode: 2, editionName: "CANADA", price: "14.99 CAD" },
            { editionCode: 3, editionName: "FRANCE", price: "23.99 EUR" },
            { editionCode: 4, editionName: "CMR", price: "500.00 XAF" }
        ];
        this.selectedEdition = new forms_1.FormControl(this.editions[0]);
        this.selectedShipping = new forms_1.FormControl('');
        this.acceptPolicy = new forms_1.FormControl(false);
        this.createForm();
    }
    Magazine.prototype.createForm = function () {
        this.magazineForm = new forms_1.FormGroup({
            fullName: this.fullName,
            selectedEdition: this.selectedEdition,
            selectedShipping: this.selectedShipping,
            acceptPolicy: this.acceptPolicy
        });
    };
    Magazine.prototype.submitForm = function () {
        var requestedData = {
            customerName: this.magazineForm.value.fullName,
            productCode: this.magazineForm.value.selectedEdition.editionCode,
            acceptPolicy: this.magazineForm.value.acceptPolicy,
            shipMode: this.magazineForm.value.selectedShiping
        };
        alert(JSON.stringify(requestedData));
    };
    return Magazine;
}());
Magazine = __decorate([
    core_1.Component({
        selector: "magazine",
        template: "\n<form [formGroup]=\"magazineForm\" (ngSubmit=\"submitForm()\")>\n    Fullname: <hr>\n    <input [FormControl]=\"fullName\" type=\"text\"/><hr>\n\n    Magazine Edition:<hr>\n    <select [FormControl]=\"selectedEdition\">\n        <option *ngFor=\"let e of editions\" [ngValue]=\"e\">\n            {{e.editionName}}\n        </option>\n    </select><hr>\n\n    Shipping Option:<hr>\n    <input type=\"radio\" [FormControl]=\"selectedShipping\" value=\"GROUND\"/> GROUND\n    <input type=\"radio\" [FormControl]=\"selectedShipping\" value=\"AIR\"/> AIR<hr>\n\n    <input [FormControl]=\"acceptPolicy\" type=\"checkbox\"/>\n    I Accept the terms and conditions <hr>\n\n    Price: <hr>\n    {{magazineForm.value.selectedEdition.price}}<hr>\n\n    <button type=\"submit\"> Purchase </button>\n\n</form>\n",
        styles: ["input.ng-touched.ng-invalid {background: red;}",
            "input:required {box-shadow: none;}",
        ]
    }),
    __metadata("design:paramtypes", [])
], Magazine);
exports.Magazine = Magazine;
//# sourceMappingURL=magazine.component.js.map