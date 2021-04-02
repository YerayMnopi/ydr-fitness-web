import { TestBed } from '@angular/core/testing';

import { TrainingsService } from './trainings.service';
import { ApiService, ApiServiceMockFactory } from 'ydr-ng-common';
import { Training } from './training/training';

describe('TrainingsService', () => {
  let service: TrainingsService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TrainingsService,
        {provide: ApiService, useFactory: ApiServiceMockFactory}
      ]
    });
    service = TestBed.inject(TrainingsService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load trainings', () => {
    service.load();
    expect(apiService.get).toHaveBeenCalledWith(service['endpoint']);
  });

  it('should create training', () => {
    service.create();
    expect(apiService.post).toHaveBeenCalledWith(service['endpoint'], {});
  });
});
