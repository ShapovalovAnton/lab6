import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpperCaseValidatorService {

  validateUpperCase(str:string) {
    if (!str || str.length < 3) return false; 
    if (str[0] !== str[0].toUpperCase()) return false; 
    if (str.replace(/\s/g, "").length < 3) return false; 
    return true;
}
  constructor() { }
}
