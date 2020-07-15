import { TestBed } from '@angular/core/testing';

import { ShoesService } from './shoes.service';

describe('ShoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoesService = TestBed.get(ShoesService);
    expect(service).toBeTruthy();
  });
});
