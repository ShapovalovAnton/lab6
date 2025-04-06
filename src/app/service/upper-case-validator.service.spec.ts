import { TestBed } from '@angular/core/testing';

import { UpperCaseValidatorService } from './upper-case-validator.service';

describe('UpperCaseValidatorService', () => {
  let service: UpperCaseValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpperCaseValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Мала літера', () => {
    let bool=service.validateUpperCase('привіт')
    expect(bool).toBe(false);
  });

  it('Мало символів', () => {
    let bool=service.validateUpperCase('Пр')
    expect(bool).toBe(false);
  });

  it('Ідеально', () => {
    let bool=service.validateUpperCase('Привіт')
    expect(bool).toBe(true);
  });
});
