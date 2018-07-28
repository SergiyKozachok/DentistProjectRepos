import { TestBed, async, inject } from '@angular/core/testing';

import { ForDentistGuard } from './guard-for-dentist.guard';

describe('ForDentistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForDentistGuard]
    });
  });

  it('should ...', inject([ForDentistGuard], (guard: ForDentistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
