import { Antiques } from "./Antiques";

export class Statue extends Antiques{
 private sculptor: string;
 private material: string;

 constructor (id:number, price:number, name:string, year:number, country:string, sculptor:string, material: string){
    super(id, price, name, year, country);
    this.sculptor=sculptor;
    this.material=material;
    
 }

 getSculptor(): string{
    return this.sculptor;
 }

 getMaterial(): string{
    return this.material;
 }

 override getDetails(): string[] {
    let details=super.getDetails();
    details.push('Скульптор: '+ this.sculptor);
    details.push('Матеріал: ' + this.material);
    return details;
 }

 override getType(): string {
     return 'Statue';
 }
}