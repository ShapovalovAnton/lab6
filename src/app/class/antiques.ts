import { IAntiques } from './iAntiques';

export abstract class Antiques implements IAntiques {
private id: number;
private price:number;
private name: string;
private year: number;
private country: string;

constructor (id:number, price:number, name:string, year:number, country:string){
if (id<0) throw new Error ('id<0');
if (price<=0) throw new Error ('price<=0');
if (year<0) throw new Error ('year<0');
this.id=id;
this.name=name;
this.price=price;
this.year=year;
this.country=country;
} 

getID(): number {
    return this.id;
}

getCountry(): string {
    return this.country;
}

getYear(): number {
    return this.year;
}

getDetails(): string[] {
    let details=[];
    details.push('Рік: '+ this.year);
    details.push('Країна: '+ this.country);
    return details;
}

getName(): string {
    return this.name
}

getPrice(): number {
    return this.price
}

getType(): string {
    return 'Antiques';
}

}