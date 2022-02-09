import { TestBed } from '@angular/core/testing';

import { TokkenService } from './tokken.service';

describe('TokkenService', () => {
  let service: TokkenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokkenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
