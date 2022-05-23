import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TrainingActions from './training.actions';
import { TrainingsService } from './trainings.service';
import { BrowserService } from 'ydr-ng-common';



@Injectable()
export class TrainingEffects {

  loadTrainings$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(TrainingActions.loadTrainings),
      switchMap(() =>
        this.trainingsService.load().pipe(
          map(data => {
            this.browserService.saveInLocalStorage('trainings', data, 600);
            return TrainingActions.loadTrainingsSuccess({ data })
          }),
          catchError(error => of(TrainingActions.loadTrainingsFailure({ error }))))
      )
    );
  });

  createTraining$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(TrainingActions.createTraining),
      switchMap(() =>
        this.trainingsService.create().pipe(
          map(data => TrainingActions.createTrainingSuccess({ data })),
          catchError(error => of(TrainingActions.createTrainingFailure({ error }))))
      )
    );
  });

  deleteTraining$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(TrainingActions.deleteTraining),
      switchMap((action) =>
        this.trainingsService.delete(action.id).pipe(
          map(data => TrainingActions.deleteTrainingSuccess({ id: action.id })),
          catchError(error => of(TrainingActions.deleteTrainingFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private readonly trainingsService: TrainingsService,
    private readonly browserService: BrowserService
  ) {}

}
