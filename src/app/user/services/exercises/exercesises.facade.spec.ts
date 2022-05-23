import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ExercisesFacade } from './exercises.facade';
import { exercisesFeatureKey, initialState } from './exercises.reducer';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadExercisess } from './exercises.actions';
import { exerciseMockFactory } from './exercise.mock';
import { Exercise } from './exercise';

describe('ExercisesFacadeService', () => {
  let actions$: Observable<any>;
  let facade: ExercisesFacade;
  let storeSpy: jasmine.Spy;
  const fakeExercise = exerciseMockFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            [exercisesFeatureKey]: {
              ...initialState,
              ...{
                ids: [fakeExercise.id],
                entities: {
                  [fakeExercise.id]: fakeExercise
                }
              }
            }
          }
        }),
        provideMockActions(() => actions$),
        ExercisesFacade
      ]
    });
    facade = TestBed.inject(ExercisesFacade);
    const store = TestBed.get(Store);
    storeSpy = spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  describe('actions', () => {
    it('should dispatch load action', () => {

      facade.load();
    
      expect(storeSpy).toHaveBeenCalledWith(loadExercisess());
    });
  });

  describe('selectors', () => {
    it('should select exercises', fakeAsync(() => {
      let result: Notification[];
      
      facade.exercises.subscribe(
        exercises => result = exercises
      );
      tick();

      expect(result).toEqual([fakeExercise]);
    }));
  });

});
