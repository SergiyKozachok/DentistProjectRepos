import { TestBed, async, inject } from '@angular/core/testing';

import { ForAdminGuard } from './guard-for-admin.guard';

describe('ForAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForAdminGuard]
    });
  });

  it('should ...', inject([ForAdminGuard], (guard: ForAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
