import { TestBed, async, inject } from '@angular/core/testing';

import { ForInternGuard } from './guard-for-intern.guard';

describe('ForInternGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForInternGuard]
    });
  });

  it('should ...', inject([ForInternGuard], (guard: ForInternGuard) => {
    expect(guard).toBeTruthy();
  }));
});
