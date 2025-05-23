import { Book } from './book';

describe(`Book testing`,()=>{
    let book:Book;
    beforeEach(()=>
    book=new Book("2", "1", 100, "Світ", 1800, 'Англія', 'Джек Лондон', 230));
    it("Створення екземпляру класу Книга",()=>{
        expect(Book).toBeTruthy();
    });
    it("Створення екземпляру класу Книга з від'ємною роком year",()=>{
        expect(()=> new Book("2","1", 100, "Світ", -1800, 'Англія', 'Джек Лондон', 230)).toThrow(new Error('year<0'));
    });
    it("Створення екземпляру класу Книга з від'ємною кількістю сторінок",()=>{
        expect(()=> new Book("2","1", 100, "Світ", 1800, 'Англія', 'Джек Лондон', -230)).toThrow(new Error('page<=0'));
    });
    it("Використання методу getDetails для екземпляру Книга",()=>{
        let expext_show = ['Рік: 1800', 'Країна: Англія', 'Автор: Джек Лондон', 'Кількість сторінок: 230'];
        let result=book.getDetails();
        expect(result).toEqual(expext_show);
    });
});