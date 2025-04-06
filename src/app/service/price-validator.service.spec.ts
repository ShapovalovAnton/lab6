import { TestBed } from '@angular/core/testing';

import { PriceValidatorService } from './price-validator.service';

describe('PriceValidatorService', () => {
  let service: PriceValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Ціна : 200$', () => {
    let bool=service.validatePrice('200$')
    expect(bool).toBe(true);
  });

  it('Ціна : 200', () => {
    let bool=service.validatePrice('200')
    expect(bool).toBe(false);
  });

  it('Ціна : 200 грн', () => {
    let bool=service.validatePrice('200 грн')
    expect(bool).toBe(true);
  });

  it('Ціна : 200 грн.', () => {
    let bool=service.validatePrice('200 грн.')
    expect(bool).toBe(true);
  });

  it('Ціна : 200 дол', () => {
    let bool=service.validatePrice('200 дол')
    expect(bool).toBe(true);
  });

  it('Ціна : 200 USD', () => {
    let bool=service.validatePrice('200 USD')
    expect(bool).toBe(true);
  });

  it('Ціна : 200 UAH', () => {
    let bool=service.validatePrice('200 UAH')
    expect(bool).toBe(true);
  });
});
