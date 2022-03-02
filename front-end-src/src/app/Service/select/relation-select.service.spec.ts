import { TestBed } from '@angular/core/testing';

import { RelationSelectService } from './relation-select.service';

describe('RelationSelectService', () => {
  let service: RelationSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
