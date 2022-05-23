import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { State } from './exercises.reducer';
import { Observable } from 'rxjs';
import { getCurrentExercise, selectAllExercises } from './exercises.selectors';
import { loadExercisess, loadExercisessFailure, loadExercisessSuccess, selectExercise } from './exercises.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Exercise } from './exercise';
import { BrowserService } from 'ydr-ng-common';

@Injectable()
export class ExercisesFacade {

  exercises: Observable<Exercise[]>;
  currentExercise: Observable<Exercise | null>;

  constructor(
    public store: Store<State>,
    public actions: Actions,
    private readonly browserService: BrowserService
  ) {
    const exercises = this.browserService.retrieveFromLocalStorage('exercises');
    if (exercises) {
      this.store.dispatch(loadExercisessSuccess({data: exercises}))
    }
    this.exercises = store.pipe(select(selectAllExercises));
    this.currentExercise = store.pipe(select(getCurrentExercise));
  }

  load() {
    this.store.dispatch(loadExercisess())
  }

  select(id: string) {
    this.store.dispatch(selectExercise({id}))
  }
}
