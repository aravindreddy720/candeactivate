import { TestBed } from '@angular/core/testing';

import { DeacGuardService } from './deac-guard.service';

describe('DeacGuardService', () => {
  let service: DeacGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeacGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
