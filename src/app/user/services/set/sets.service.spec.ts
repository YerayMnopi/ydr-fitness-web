import { TestBed } from '@angular/core/testing';

import { SetsService } from './sets.service';
import { ApiService, ApiServiceMockFactory } from 'ydr-ng-common';
import { SetCreatePayload } from './set';

describe('SetsService', () => {
  let service: SetsService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SetsService,
        {provide: ApiService, useFactory: ApiServiceMockFactory}
      ]
    });
    service = TestBed.inject(SetsService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load sets', () => {
    service.load();
    expect(apiService.get).toHaveBeenCalledWith(service['endpoint']);
  });

  it('should create set', () => {
    const trainingId = 'test';
    const exerciseId = 'test';
    const executionId = 'test';
    service.create({} as SetCreatePayload);
    expect(apiService.post).toHaveBeenCalledWith(service['endpoint'], {});
  });
});
