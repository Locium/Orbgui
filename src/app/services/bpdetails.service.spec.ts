import { TestBed } from '@angular/core/testing';

import { BPlist } from './bpdetails.service';

describe('BPdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BPlist = TestBed.get(BPlist);
    expect(service).toBeTruthy();
  });
});
