import { IAntiques } from './iAntiques';

export class Antiques implements IAntiques {
    private id: string;
    private price: number;
    private name: string;
    private year: number;
    private country: string;
    private type: string;
  
    constructor(type:string, id: string, price: number, name: string, year: number, country: string) {
      if (year < 0) throw new Error('year<0');
      if (price <0) throw new Error('price<0');
      this.id = id;
      this.name = name;
      this.year = year;
      this.country = country;
      this.type=type;
      this.price=price;
      const rate = 40;

    }

getID(): string {
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

public getPrice(): number {
    return this.price;
  }

getType(): string {
    return this.type;
}

}