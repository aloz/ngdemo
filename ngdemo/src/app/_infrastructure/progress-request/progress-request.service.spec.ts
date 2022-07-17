import { TestBed } from '@angular/core/testing';

import { ProgressRequestService } from './progress-request.service';

describe('ProgressRequestService', () => {
  let service: ProgressRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
