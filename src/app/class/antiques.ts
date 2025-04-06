import { IAntiques } from './iAntiques';

export abstract class Antiques implements IAntiques {
    private id: number;
    private priceUSD: number;
    private priceUAH: number;
    private name: string;
    private year: number;
    private country: string;
  
    constructor(id: number, price: string, name: string, year: number, country: string) {
      if (id < 0) throw new Error('id<0');
      if (year < 0) throw new Error('year<0');
      this.id = id;
      this.name = name;
      this.year = year;
      this.country = country;
  
      const rate = 40;
  
      const match = price.match(/^(\d+(?:\.\d+)?)\s*(UAH|USD|грн\.?|гривень|дол\.?|доларів|\$)$/i);
  if (!match) throw new Error('Неправильний формат price');

  const amount = parseFloat(match[1]);
  const currencyRaw = match[2].toUpperCase();

  if (amount <= 0) throw new Error('Ціна має бути більшою за 0');

  const currency = ['USD', 'ДОЛ', 'ДОЛ.', 'ДОЛАРІВ', '$'].includes(currencyRaw) ? 'USD' : 'UAH';

  if (currency === 'USD') {
    this.priceUSD = amount;
    this.priceUAH = amount * rate;
  } else {
    this.priceUAH = amount;
    this.priceUSD = amount / rate;
  }
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

public getPriceUSD(): number {
    return this.priceUSD;
  }

  public getPriceUAH(): number {
    return this.priceUAH;
  }

getType(): string {
    return 'Antiques';
}

}