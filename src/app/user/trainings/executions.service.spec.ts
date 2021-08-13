import { TestBed } from '@angular/core/testing';

import { ExecutionsService } from './executions.service';
import { ApiService, ApiServiceMockFactory } from 'ydr-ng-common';
import { Execution } from './training/execution';

describe('ExecutionsService', () => {
  let service: ExecutionsService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExecutionsService,
        {provide: ApiService, useFactory: ApiServiceMockFactory}
      ]
    });
    service = TestBed.inject(ExecutionsService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load executions', () => {
    service.load();
    expect(apiService.get).toHaveBeenCalledWith(service['endpoint']);
  });

  it('should create execution', () => {
    const trainingId = 'test';
    const exerciseId = 'test';
    service.create(trainingId, exerciseId);
    expect(apiService.post).toHaveBeenCalledWith(service['endpoint'], {trainingId, exerciseId});
  });
});
