import { Book } from "./book";
import { Statue } from "./statue";
import { Coin } from "./сoin";
import { Painting } from "./painting";
import { antiquesType } from "./antiguesType";
import { IAntiques } from "./iAntiques";

export class AntiquesFactory {
    static createAntiques(data:any) : IAntiques{
        switch (data.type){
            case antiquesType[0]:
                return new Coin (data.id, data.price, data.name, data.year, data.country);
            case antiquesType[1]:
                return new Book (data.id, data.price, data.name, data.year, data.country, data.author, data.page);
            case antiquesType[2]:
                return new Statue (data.id, data.price, data.name, data.year, data.country, data.sculptor, data.material);
            case antiquesType[3]:
                return new Painting (data.id, data.price, data.name, data.year, data.country, data.artist, data.style);
            default: throw new Error ('Невідомий предмет!')
        }

    }
}