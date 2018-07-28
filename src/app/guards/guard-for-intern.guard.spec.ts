import { TestBed, async, inject } from '@angular/core/testing';

import { GuardForInternGuard } from './guard-for-intern.guard';

describe('GuardForInternGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardForInternGuard]
    });
  });

  it('should ...', inject([GuardForInternGuard], (guard: GuardForInternGuard) => {
    expect(guard).toBeTruthy();
  }));
});
