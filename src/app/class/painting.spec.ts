import { Painting } from './painting';

describe(`Painting testing`,()=>{
    let statue:Painting;
    beforeEach(()=>
    statue=new Painting("1", '100 UAH', "Зевс", 1800, 'Англія', 'Джек Лондон', 'Античність'));
    it("Створення екземпляру класу Картина",()=>{
        expect(statue).toBeTruthy();
    });
    it("Створення екземпляру класу Картина з від'ємною ціною price",()=>{
        expect(()=> new Painting("1", '100', "Зевс", 1800, 'Англія', 'Джек Лондон', 'Античність')).toThrow(new Error('Неправильний формат price'));
    });
    it("Створення екземпляру класу Картина з від'ємною роком year",()=>{
        expect(()=> new Painting("1", '100 UAH', "Зевс", -1800, 'Англія', 'Джек Лондон', 'Античність')).toThrow(new Error('year<0'));
    });
    it("Використання методу getDetails для екземпляру Картина",()=>{
        let expext_show = ['Рік: 1800', 'Країна: Англія', 'Художник: Джек Лондон', 'Стиль: Античність'];
        let result=statue.getDetails();
        expect(result).toEqual(expext_show);
    });
});