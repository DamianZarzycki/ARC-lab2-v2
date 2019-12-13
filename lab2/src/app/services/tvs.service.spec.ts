import { TestBed } from '@angular/core/testing';

import { TvsService } from './tvs.service';

describe('TvsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvsService = TestBed.get(TvsService);
    expect(service).toBeTruthy();
  });
});
