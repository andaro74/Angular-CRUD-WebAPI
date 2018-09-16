import { TestBed } from '@angular/core/testing';

import { EntertainerService } from './entertainer.service';

describe('EntertainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntertainerService = TestBed.get(EntertainerService);
    expect(service).toBeTruthy();
  });
});
