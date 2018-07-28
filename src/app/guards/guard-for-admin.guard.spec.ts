import { TestBed, async, inject } from '@angular/core/testing';

import { GuardForAdminGuard } from './guard-for-admin.guard';

describe('GuardForAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardForAdminGuard]
    });
  });

  it('should ...', inject([GuardForAdminGuard], (guard: GuardForAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
