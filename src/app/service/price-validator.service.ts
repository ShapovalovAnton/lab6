import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceValidatorService {

  validatePrice (price:string) : boolean{
    const match = price.match(/^(\d+(?:\.\d+)?)\s*(UAH|USD|грн\.?|гривень|дол\.?|доларів|\$)$/i);
    if (!match) return false
    else return true;

  }

  constructor() { }
}
