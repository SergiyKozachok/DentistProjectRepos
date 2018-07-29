import { TestBed, async, inject } from '@angular/core/testing';

import { ForPatientGuard } from './guard-for-patient.guard';

describe('ForPatientGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForPatientGuard]
    });
  });

  it('should ...', inject([ForPatientGuard], (guard: ForPatientGuard) => {
    expect(guard).toBeTruthy();
  }));
});
