import { TestBed } from '@angular/core/testing';

import { BPlistService } from './bplist.service';

describe('BPlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BPlistService = TestBed.get(BPlistService);
    expect(service).toBeTruthy();
  });
});
