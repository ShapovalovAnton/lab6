import { filterByEpochPipe } from './filterByEpoch';
import { IAntiques } from '../class/iAntiques';

describe('filterByEpochPipe', () => {
  let pipe: filterByEpochPipe;

  beforeEach(() => {
    pipe = new filterByEpochPipe();
  });

  it('Чтфорення екземпляру', () => {
    expect(pipe).toBeTruthy();
  });

  it('Жодного співпадіння', () => {
    const epoch = { start: 1800, 
        end: 1850 };
    const antiques: IAntiques[] = [
      { getYear: () => 1700 } as IAntiques,
      { getYear: () => 1900 } as IAntiques
    ];
    const result = pipe.transform(antiques, epoch);
    expect(result.length).toBe(0);
  });
  it('Є співпадіння', () => {
    const epoch = { start: 1800, end: 1850 };
    const antiques: IAntiques[] = [
      { getYear: () => 1799 } as IAntiques,
      { getYear: () => 1800 } as IAntiques,
      { getYear: () => 1825 } as IAntiques,
      { getYear: () => 1850 } as IAntiques,
      { getYear: () => 1851 } as IAntiques
    ];
    const result = pipe.transform(antiques, epoch);
    expect(result.length).toBe(3);
    expect(result.map(a => a.getYear())).toEqual([1800, 1825, 1850]);
  });
  it('Порожній масив', () => {
    const result = pipe.transform([], { start: 1500, end: 1600 });
    expect(result).toEqual([]);
  });
});
