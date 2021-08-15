import { TestBed } from '@angular/core/testing';

import { TrainingDetailResolver } from './training-detail.resolver';

describe('TrainingDetailResolver', () => {
  let resolver: TrainingDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TrainingDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
