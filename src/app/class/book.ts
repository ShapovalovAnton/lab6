import { Antiques } from "./Antiques";

export class Book extends Antiques{
 private author: string;
 private page: number;

 constructor (id:number, price:number, name:string, year:number, country:string, author:string, page: number){
    if(page<=0) throw new Error ('page<=0');
    super(id, price, name, year, country);
    this.author=author;
    this.page=page;
    
 }

 getAuthor(): string{
    return this.author;
 }

 getPage(): number{
    return this.page;
 }

 override getDetails(): string[] {
    let details=super.getDetails();
    details.push('Автор: '+ this.author);
    details.push('Кількість сторінок: ' + this.page);
    return details;
 }

 override getType(): string {
     return 'Book';
 }
}