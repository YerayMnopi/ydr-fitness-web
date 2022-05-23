import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ExercisesActions from './exercises.actions';
import { ExercisesService } from './exercises.service';
import { BrowserService } from 'ydr-ng-common';



@Injectable()
export class ExercisesEffects {

  loadExercisess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ExercisesActions.loadExercisess),
      switchMap(() =>
        this.exercisesService.load().pipe(
          map(data => {
            this.browserService.saveInLocalStorage('exercises', data);
            return ExercisesActions.loadExercisessSuccess({ data })
          }),
          catchError(error => of(ExercisesActions.loadExercisessFailure({ error }))))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private readonly exercisesService: ExercisesService,
    private readonly browserService: BrowserService
  ) {}

}
