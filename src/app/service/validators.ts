import { PriceValidatorService } from "./price-validator.service";
import { UpperCaseValidatorService } from "./upper-case-validator.service";
import { AbstractControl, ValidatorFn } from "@angular/forms";
export function priceValidator(): ValidatorFn{

    return (control: AbstractControl):
    { [key:string]: boolean} | null =>{
        let validator = new PriceValidatorService;
        let valid=!control.value || validator.validatePrice(control.value);
        return valid ? null : {price:true}
    };
}

export function upperCaseValidator(): ValidatorFn{

    return (control: AbstractControl):
    { [key:string]: boolean} | null =>{
        let validator = new UpperCaseValidatorService;
        let valid=!control.value || validator.validateUpperCase(control.value);
        return valid ? null : {str:true}
    };
}