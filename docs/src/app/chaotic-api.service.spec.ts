import { TestBed } from '@angular/core/testing';

import { ChaoticApiService } from './chaotic-api.service';

describe('ChaoticApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChaoticApiService = TestBed.get(ChaoticApiService);
    expect(service).toBeTruthy();
  });
});
