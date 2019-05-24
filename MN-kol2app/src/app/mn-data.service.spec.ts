import { TestBed } from '@angular/core/testing';

import { MNDataService } from './mn-data.service';

describe('MNDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MNDataService = TestBed.get(MNDataService);
    expect(service).toBeTruthy();
  });
});
