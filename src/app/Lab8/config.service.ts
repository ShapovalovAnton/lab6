import { Injectable } from '@angular/core';
import { AntiquesType, antiquesType } from '../class/antiguesType';
import { BehaviorSubject } from 'rxjs';
import { AntiquesCountry, antiquesCountry } from './AntiquesCountry';
@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  types$: BehaviorSubject<AntiquesType[]> = new BehaviorSubject<AntiquesType[]>([]);
  countries$: BehaviorSubject<AntiquesCountry[]> = new BehaviorSubject<AntiquesCountry[]>([]);
  
  setType(type:AntiquesType[]){
    console.log('Є зміни!');
    this.types$.next(type);
  }

  setCountry(country:AntiquesCountry[]){
    console.log('Є зміни!');
    this.countries$.next(country);
  }

  constructor() { }
}

