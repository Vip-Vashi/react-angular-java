import { TestBed } from '@angular/core/testing';

import { SignalService } from './signals.service';

describe('SignalsService', () => {
  let service: SignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
