import { ConfigService } from './../Lab8/config.service';
import { Injectable } from '@angular/core';
import {IAntiques} from 'src/app/class/iAntiques';
import { AntiquesFactory } from '../class/antiquesFactory';
import { AntiquesType } from '../class/antiguesType';
import { AntiquesCountry, antiquesCountry } from '../Lab8/AntiquesCountry';

const URL ="https://api.jsonbin.io/v3/b/67e903738960c979a57b16f2";
@Injectable({
  providedIn: 'root'
})
export class ReadService {
  data:any;
  public antiques: IAntiques[]=[]; 

  addAntiques(some_antiques:IAntiques){
    this.antiques.push(some_antiques);
  }

  removeAntique(index: number) {
    if (index >= 0 && index < this.antiques.length) {
      this.antiques.splice(index, 1);
    }
  }

  
  public async load(){
    this.data=[];
    fetch(URL).then((res)=>res.json())
    .then((json)=>{

      this.data=json;
      this.data=this.data.record;

      let antiques = this.data.map((item:any)=>AntiquesFactory.createAntiques(item));

      antiques.forEach((element:any) => this.addAntiques(element));
        
    });

  }

  searchAntiques: IAntiques[]= [];

  search(types: AntiquesType[], countries: String[]) {
    this.searchAntiques = this.antiques.filter((ant) =>
      types.includes(ant.getType() as AntiquesType) && countries.includes(ant.getCountry() as AntiquesCountry)
    );
    console.log(this.searchAntiques);
  }

  

  constructor(private ConfigService: ConfigService) { }

  typeSub=this.ConfigService.types$.subscribe(()=>{
    let types=this.ConfigService.types$.value;
    let countries=this.ConfigService.countries$.value;
    this.search(types, countries);
  })

}
