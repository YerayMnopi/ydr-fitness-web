import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExercisesEffects } from './exercises.effects';

describe('ExercisesEffects', () => {
  let actions$: Observable<any>;
  let effects: ExercisesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExercisesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ExercisesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
