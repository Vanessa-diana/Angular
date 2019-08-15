import { TestBed, inject } from '@angular/core/testing';

import { BolosService } from './bolos.service';

describe('BolosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolosService]
    });
  });

  it('should be created', inject([BolosService], (service: BolosService) => {
    expect(service).toBeTruthy();
  }));
});
