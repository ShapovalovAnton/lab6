import { AntiquesFactory } from './antiquesFactory';

class data_1{
    type='Coin';
    id=1;
    price=100;
    name='Some coin';
    year=1900;
    country='Ukraine';
}

class data_2{
    type='Book';
    id=1;
    price=100;
    name='Some book';
    year=1900;
    country='Ukraine';
    author='Остап Вишня';
    page=100;
}

class data_3{
    type='Statue';
    id=1;
    price=100;
    name='Some Statue';
    year=1900;
    country='Ukraine';
    sculptor='Остап Вишня';
    material='Гіпс';
}

class data_4{
    type='Painting';
    id=1;
    price=100;
    name='Some Statue';
    year=1900;
    country='Ukraine';
    artist='Остап Вишня';
    style='Ренесанс';
}

class data_5{
    type='Ваза';

}


describe(`ItemFactory testing`,()=>{
    it("Створення Монети",()=>{
        let item = AntiquesFactory.createAntiques(new data_1);
        expect(item).toBeTruthy();
    });
    it("Створення Книги",()=>{
        let item = AntiquesFactory.createAntiques(new data_2);
        expect(item).toBeTruthy();
    });
    it("Створення Статуї",()=>{
        let item = AntiquesFactory.createAntiques(new data_3);
        expect(item).toBeTruthy();
    });
    it("Створення Картини",()=>{
        let item = AntiquesFactory.createAntiques(new data_4);
        expect(item).toBeTruthy();
    });
});