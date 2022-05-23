import { TestBed } from '@angular/core/testing';

import { ExercisesService } from './exercises.service';
import { ApiService, ApiServiceMockFactory } from 'ydr-ng-common';
import { Exercise } from './exercise';

describe('ExercisesService', () => {
  let service: ExercisesService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExercisesService,
        {provide: ApiService, useFactory: ApiServiceMockFactory}
      ]
    });
    service = TestBed.inject(ExercisesService);
    apiService = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load exercises', () => {
    service.load();
    expect(apiService.get).toHaveBeenCalledWith(service['endpoint']);
  });

  it('should create exercise', () => {
    const exerciseName = 'test';
    service.create(exerciseName);
    expect(apiService.post).toHaveBeenCalledWith(service['endpoint'], {name: exerciseName});
  });
});
