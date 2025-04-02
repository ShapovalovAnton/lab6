import { Injectable } from '@angular/core';
import {IAntiques} from 'src/app/class/iAntiques';
import { AntiquesFactory } from '../class/antiquesFactory';

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

  
  public async load(){
    this.data=[];
    fetch(URL).then((res)=>res.json())
    .then((json)=>{

      this.data=json;
      this.data=this.data.record;

      let antiques = this.data.map((item:any)=>AntiquesFactory.createAntiques(item));
      this.antiques=[];

      antiques.forEach((element:any) => this.addAntiques(element));
        
    });

  }

  constructor() { }
}
