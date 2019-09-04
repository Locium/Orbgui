import { TestBed } from '@angular/core/testing';

import { BPdetailsService } from './bpdetails.service';

describe('BPdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BPdetailsService = TestBed.get(BPdetailsService);
    expect(service).toBeTruthy();
  });
});
