import { TestBed, async, inject } from '@angular/core/testing';

import { ForNurseGuard } from './guard-for-nurse.guard';

describe('ForNurseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForNurseGuard]
    });
  });

  it('should ...', inject([ForNurseGuard], (guard: ForNurseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
