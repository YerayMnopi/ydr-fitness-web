import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as ExecutionActions from './execution.actions';
import { ExecutionsService } from './executions.service';



@Injectable()
export class ExecutionEffects {

  createExecution$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(ExecutionActions.createExecution),
      switchMap((action) =>
        this.executionsService.create(action.data.trainingId, action.data.exerciseId).pipe(
          map(data => ExecutionActions.createExecutionSuccess({ data })),
          catchError(error => of(ExecutionActions.createExecutionFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private readonly executionsService: ExecutionsService
  ) {}

}
