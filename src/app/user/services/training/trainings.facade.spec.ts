import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { TrainingsFacade } from './trainings.facade';
import { trainingFeatureKey, initialState } from './training.reducer';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadTrainings } from './training.actions';
import { trainingMockFactory } from './training.mock';
import { Training } from './training';

describe('TrainingsFacadeService', () => {
  let actions$: Observable<any>;
  let facade: TrainingsFacade;
  let storeSpy: jasmine.Spy;
  const fakeTraining = trainingMockFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [trainingFeatureKey]: {
              ...initialState,
              ...{
                ids: [fakeTraining.id],
                entities: {
                  [fakeTraining.id]: fakeTraining
                }
              }
            }
          }
        }),
        provideMockActions(() => actions$),
        TrainingsFacade
      ]
    });
    facade = TestBed.inject(TrainingsFacade);
    const store = TestBed.get(Store);
    storeSpy = spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('actions', () => {
    it('should dispatch load action', () => {

      facade.load();
    
      expect(storeSpy).toHaveBeenCalledWith(loadTrainings());
    });
  });

  describe('selectors', () => {
    it('should select trainings', fakeAsync(() => {
      let result: Notification[];
      
      facade.trainings.subscribe(
        trainings => result = trainings
      );
      tick();

      expect(result).toEqual([fakeTraining]);
    }));
  });

});
