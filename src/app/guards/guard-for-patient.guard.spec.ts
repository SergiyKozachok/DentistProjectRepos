import { TestBed, async, inject } from '@angular/core/testing';

import { GuardForPatientGuard } from './guard-for-patient.guard';

describe('GuardForPatientGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardForPatientGuard]
    });
  });

  it('should ...', inject([GuardForPatientGuard], (guard: GuardForPatientGuard) => {
    expect(guard).toBeTruthy();
  }));
});
