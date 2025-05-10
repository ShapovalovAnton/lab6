import { AgePipe } from './agePipe';
import { IAntiques } from '../class/iAntiques';

describe('AgePipe', () => {
  let pipe: AgePipe;

  beforeEach(() => {
    pipe = new AgePipe();
  });
  it('Створення AgePipe', () => {
    expect(pipe).toBeTruthy();
  });
  it('Обчислення віку 1902 рік', () => {
    let currentYear = new Date().getFullYear();
    let antique: IAntiques = {
      getID: () => 'test',
      getName: () => 'Тестовий предмет',
      getYear: () => 1902,
      getCountry: () => 'Україна',
      getDetails: () => ['опис'],
      getPrice: () => 100,
      getType: () => 'тестовий'
    };
    let result = pipe.transform(antique);

    expect(result).toBe(`123 років`);
  });
});