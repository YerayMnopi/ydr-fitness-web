import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SetActions from './set.actions';
import { SetsService } from './sets.service';



@Injectable()
export class SetEffects {

  loadSets$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SetActions.createSet),
      switchMap((action) =>
        this.setService.create(action.data).pipe(
          map(data => SetActions.createSetSuccess({ data })),
          catchError(error => of(SetActions.createSetFailure({ error }))))
      )
    );
  });



  constructor(
    private actions$: Actions,
    private readonly setService: SetsService
  ) {}

}
