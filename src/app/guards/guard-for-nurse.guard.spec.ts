import { TestBed, async, inject } from '@angular/core/testing';

import { GuardForNurseGuard } from './guard-for-nurse.guard';

describe('GuardForNurseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardForNurseGuard]
    });
  });

  it('should ...', inject([GuardForNurseGuard], (guard: GuardForNurseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
