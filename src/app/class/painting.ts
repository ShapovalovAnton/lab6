import { Antiques } from "./Antiques";

export class Painting extends Antiques{
 private artist: string;
 private style: string;

 constructor (id:number, price:number, name:string, year:number, country:string, artist:string, style: string){
    super(id, price, name, year, country);
    this.artist=artist;
    this.style=style;
    
 }

 getArtist(): string{
    return this.artist;
 }

 getStyle(): string{
    return this.style;
 }

 override getDetails(): string[] {
    let details=super.getDetails();
    details.push('Художник: '+ this.artist);
    details.push('Стиль: ' + this.style);
    return details;
 }

 override getType(): string {
     return 'Painting';
 }
}