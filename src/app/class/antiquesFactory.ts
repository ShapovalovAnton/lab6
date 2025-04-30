import { Book } from "./book";
import { Statue } from "./statue";
import { Coin } from "./сoin";
import { Painting } from "./painting";
import { IAntiques } from "./iAntiques";
import { Antiques } from "./Antiques";

export class AntiquesFactory {
    static createAntiques(data:any) : IAntiques{
        switch (data.type){
            case 'Coin':
                return new Coin (data.type, data.id, data.price, data.name, data.year, data.country);
            case 'Book':
                return new Book (data.type, data.id, data.price, data.name, data.year, data.country, data.author, data.page);
            case 'Statue':
                return new Statue (data.type, data.id, data.price, data.name, data.year, data.country, data.sculptor, data.material);
            case 'Painting':
                return new Painting (data.type, data.id, data.price, data.name, data.year, data.country, data.artist, data.style);
            default: return new Antiques (data.type, data.id, data.price, data.name, data.year, data.country);
        }

    }
}