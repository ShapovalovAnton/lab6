import { ConfigService } from './../Lab8/config.service';
import { Injectable } from '@angular/core';
import { IAntiques } from 'src/app/class/iAntiques';
import { AntiquesFactory } from '../class/antiquesFactory';
import { AntiquesType } from '../class/antiguesType';
import { AntiquesCountry } from '../Lab8/AntiquesCountry';
import { Database, onValue, ref, push, set, remove, update, getDatabase } from 'firebase/database';
import { BehaviorSubject } from 'rxjs';
import { Type } from '../class/type';
import { TypeList } from '../class/typeList';
import { database } from './../firebase-config';

const URL ="https://api.jsonbin.io/v3/b/67e903738960c979a57b16f2";
@Injectable({
  providedIn: 'root'
})
export class ReadService {
  data:any;
  public antiques: IAntiques[]=[]; 

  addType(name:string){
    const type: Type = {
      id: '',
      typeName: name.trim()
    };
    const typeRef=ref(database, 'type');
    const newTypeRef = push(typeRef);
    const generatedId = newTypeRef.key;
    type.id = generatedId;

  set(newTypeRef, type)
    .then(() => {
      TypeList.add(type);
     
    })
    .catch(error => {
      console.error('Помилка при збереженні типу в базу:', error);
    });
  }

  editType(type:Type){
    const typeRef=ref(database, `type/${type.id}`);
    update(typeRef, type);
    TypeList.destroy();
    this.fetchType(database);
  }

  deleteType(id: string): Promise<void> {
    const typeRef = ref(database, `type/${id}`);
  
    return remove(typeRef)
      .then(() => {
        const antiquesRef = ref(database, 'antiques');
  
        return new Promise<void>((resolve) => {
          onValue(antiquesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const deletePromises = Object.entries(data)
                .filter(([_, value]: [string, any]) => value.type === id)
                .map(([key]) => {
                  const antiqueRefToDelete = ref(database, `antiques/${key}`);
                  return remove(antiqueRefToDelete);
                });
  
              Promise.all(deletePromises).then(() => resolve());
            } else {
              resolve();
            }
          }, { onlyOnce: true });
        });
      })
      .catch(error => {
        console.error('Помилка при видаленні типу:', error);
        return Promise.reject(error);
      });
  }

  addAntiques(some_antiques:IAntiques){
    this.antiques.push(some_antiques);
    const antiquesRef=ref(database, 'antiques');
    const newAntiquesRef = push(antiquesRef);
    const generatedId = newAntiquesRef.key;
    
    set(newAntiquesRef, {
      ...some_antiques,
      id: generatedId,
      type: TypeList.findIdByTypeName(some_antiques.getType()),

    });
  }

  removeAntique(index: number) {
    if (index >= 0 && index < this.antiques.length) {
      const id = this.antiques[index].getID();
      this.antiques.splice(index, 1);
      const antiquesRef=ref(database, `antiques/${id}`);
      remove(antiquesRef)
    }
    
  }

  editAntiques(ant:any){
    ant.type=TypeList.findIdByTypeName(ant.type);
    const antiquesRef=ref(database, `antiques/${ant.getID()}`);
    update(antiquesRef, ant);


  }

  private antiquesSubject=new BehaviorSubject<IAntiques[]>([]);
  antiques$ = this.antiquesSubject.asObservable;
  
  async fetchAll() {
    const db = database;
    await this.fetchType(db);
    this.fetchAntiques(db);
  } 

  fetchType(db: any):void{
    const typeRef=ref(db, 'type');
    console.log(typeRef);
    onValue(typeRef, (snapshot)=>{
      const data = snapshot.val();
      for (const [key, value] of Object.entries(data)) {
        TypeList.add(value as Type);
      }
    })
    

  }

  fetchAntiques(db: any):void{
    const antiquesRef=ref(db, 'antiques');
    console.log(antiquesRef);
    onValue(antiquesRef, (snapshot)=>{
      const data = snapshot.val();
      const antiques = data ? Object.entries(data).map(([key, value]: [string, any]) => {
        const typeName = TypeList.findTypeNameById(value.type);
        if (!typeName) {
          throw new Error(`Невідомий тип для предмета з id ${key}`);
        }
        value.type = typeName;
        return AntiquesFactory.createAntiques({ ...value, id: key });
      }) : [];
      this.antiques=antiques;
      this.antiquesSubject.next(antiques);
    })
    

  }


  searchAntiques: IAntiques[]= [];

  search(types: String[], countries: String[]) {
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
