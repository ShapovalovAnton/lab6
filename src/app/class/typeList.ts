import { antiquesType } from './antiguesType';
import { Type } from "./type";

export class TypeList{
    static antiquesTypes=new Array();
    static allTypeNames: string[] = [];
    condtructor () {}
    static add(type: Type) {
      const exists = TypeList.antiquesTypes.some(t => t.id === type.id);
      if (!exists) {
        TypeList.antiquesTypes.push(type);
        TypeList.allTypeNames.push(type.typeName);
      }
    }
    static findTypeNameById(id: string): string | undefined {
        const found = TypeList.antiquesTypes.find(t => t.id === id);
        return found?.typeName;
      }
    
      static findIdByTypeName(name: string): number | undefined {
        const found = TypeList.antiquesTypes.find(t => t.typeName === name);
        return found?.id;
      }

      static destroy(){
        TypeList.antiquesTypes=[];
        TypeList.allTypeNames=[];
      }
      static remove(id: string) {
        let name=TypeList.findTypeNameById(id);
        this.allTypeNames=this.allTypeNames.filter(t => t !== name);
        this.antiquesTypes = this.antiquesTypes.filter(t => t.id !== id);
      }

}