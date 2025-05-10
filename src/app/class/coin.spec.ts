import { Coin } from './сoin';

describe(`Coin testing`,()=>{
    let coin:Coin;
    beforeEach(()=>
    coin=new Coin("1", "1", 100, "10 фунтів", 1800, 'Англія'));
    it("Створення екземпляру класу Монета",()=>{
        expect(coin).toBeTruthy();
    });
    it("Створення екземпляру класу Монета з від'ємною роком year",()=>{
        expect(()=> new Coin("1", "1", 100, "10 фунтів", -1800, 'Англія')).toThrow(new Error('year<0'));
    });
    it("Тестування методу getCountry",()=>{
        let res=coin.getCountry();
        expect(res).toEqual('Англія');
    });
    it("Тестування методу getYear",()=>{
        let res=coin.getYear();
        expect(res).toEqual(1800);
    });
    it("Тестування методу getName",()=>{
        let res=coin.getName();
        expect(res).toEqual('10 фунтів');
    });
    it("Тестування методу getType",()=>{
        let res=coin.getType();
        expect(res).toEqual('Coin');
    });
    it("Використання методу getDetails для екземпляру Монета",()=>{
        let expext_show = ['Рік: 1800', 'Країна: Англія'];
        let result=coin.getDetails();
        expect(result).toEqual(expext_show);
    });
});
