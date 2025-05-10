
import { Statue } from './statue';

describe(`Statue testing`,()=>{
    let statue:Statue;
    beforeEach(()=>
    statue=new Statue("3","1", 100, "Зевс", 1800, 'Англія', 'Джек Лондон', 'Гіпс'));
    it("Створення екземпляру класу Монета",()=>{
        expect(statue).toBeTruthy();
    });
    it("Створення екземпляру класу Статуя з від'ємною ціною price",()=>{
        expect(()=> new Statue("3","1", -100, "Зевс", 1800, 'Англія', 'Джек Лондон', 'Гіпс')).toThrow(new Error('Неправильний формат price'));
    });
    it("Створення екземпляру класу Статуя з від'ємною роком year",()=>{
        expect(()=> new Statue("3", "1", 100, "Зевс", -1800, 'Англія', 'Джек Лондон', 'Гіпс')).toThrow(new Error('year<0'));
    });
    it("Використання методу getDetails для екземпляру Статуя",()=>{
        let expext_show = ['Рік: 1800', 'Країна: Англія', 'Скульптор: Джек Лондон', 'Матеріал: Гіпс'];
        let result=statue.getDetails();
        expect(result).toEqual(expext_show);
    });
});