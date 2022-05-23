import { TestBed } from '@angular/core/testing';

import { ExecutionFormService } from './execution-form.service';

describe('ExecutionFormService', () => {
  let service: ExecutionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExecutionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
