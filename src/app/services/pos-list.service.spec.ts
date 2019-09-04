import { TestBed } from '@angular/core/testing';

import { PosListService } from './pos-list.service';

describe('PosListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosListService = TestBed.get(PosListService);
    expect(service).toBeTruthy();
  });
});
