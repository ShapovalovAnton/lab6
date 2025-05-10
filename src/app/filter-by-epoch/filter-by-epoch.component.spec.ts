import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterByEpochComponent } from './filter-by-epoch.component';
import { EpochList } from '../pipe/epoch';
import { IAntiques } from '../class/iAntiques';

describe('FilterByEpochComponent', () => {
  let component: FilterByEpochComponent;
  let fixture: ComponentFixture<FilterByEpochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByEpochComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterByEpochComponent);
    component = fixture.componentInstance;
  });

  it('має створитись', () => {
    expect(component).toBeTruthy();
  });

  it('має містити список EpochList', () => {
    expect(component.epochs).toEqual(EpochList);
  });

  it('повинен фільтрувати антикваріат за вибраною епохою (через pipe)', () => {
    let epoch = { 
      name: 'Бароко', 
    start: 1600, 
    end: 1750 };

    //Потрібна епоха
    let antique1: IAntiques = {
      getID: () => '1',
      getName: () => 'Скриня',
      getYear: () => 1700,
      getCountry: () => 'Польща',
      getDetails: () => ['Опис'],
      getPrice: () => 200,
      getType: () => 'Меблі'
    };
    //Не та епоха
    let antique2: IAntiques = {
      getID: () => '2',
      getName: () => 'Глечик',
      getYear: () => 1800,
      getCountry: () => 'Україна',
      getDetails: () => ['Опис'],
      getPrice: () => 150,
      getType: () => 'Кераміка'
    };

    component.antiques = [antique1, antique2];
    component.selectedEpoch = epoch;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;


    expect(compiled.textContent).toContain('Скриня');
    expect(compiled.textContent).not.toContain('Глечик');
  });
});
