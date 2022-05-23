import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ɵangular_packages_router_router_n } from '@angular/router';
import { TrainingsService } from '../../trainings.service';

import { TrainingDetailResolver } from './training-detail.resolver';

describe('TrainingDetailResolver', () => {
  let resolver: TrainingDetailResolver;
  let trainingsService: TrainingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TrainingDetailResolver,
        {provide: TrainingsService, useValue: jasmine.createSpyObj(
          'TrainingsService',
          [
            'get'
          ]
        )}
      ]
    });
    resolver = TestBed.inject(TrainingDetailResolver);
    trainingsService = TestBed.inject(TrainingsService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call trainings service', () => {
    const trainingId = 'test';
    const route = new ActivatedRouteSnapshot();
    route.params = {
      id: trainingId
    };
    const state  = {} as RouterStateSnapshot;
    resolver.resolve(route, state);
    expect(trainingsService.get).toHaveBeenCalledWith(trainingId)
  })
});
