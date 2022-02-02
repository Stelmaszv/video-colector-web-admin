import { TestBed } from '@angular/core/testing';

import { ProcentService } from './procent.service';

describe('ProcentService', () => {
  let service: ProcentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
