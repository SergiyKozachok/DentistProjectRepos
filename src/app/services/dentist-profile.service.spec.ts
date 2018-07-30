import { TestBed, inject } from '@angular/core/testing';

import { DentistPrifileServiceService } from './dentist-prifile-service.service';

describe('DentistPrifileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DentistPrifileServiceService]
    });
  });

  it('should be created', inject([DentistPrifileServiceService], (service: DentistPrifileServiceService) => {
    expect(service).toBeTruthy();
  }));
});
