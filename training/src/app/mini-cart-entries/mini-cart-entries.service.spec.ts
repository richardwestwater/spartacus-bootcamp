import { TestBed } from '@angular/core/testing';

import { MiniCartEntriesService } from './mini-cart-entries.service';

describe('MiniCartEntriesService', () => {
  let service: MiniCartEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniCartEntriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
