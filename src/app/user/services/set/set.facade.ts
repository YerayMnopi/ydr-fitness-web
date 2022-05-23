import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../training/training.reducer';
import { Observable } from 'rxjs';
import * as SetActions from './set.actions';
import { Actions, ofType } from '@ngrx/effects';
import { SetCreatePayload } from './set';
import { map } from 'rxjs/operators';

@Injectable()
export class SetFacade {
  constructor(
    public store: Store<State>,
    public actions: Actions
  ) {
  }

  select(id: string) {
    this.store.dispatch(SetActions.selectSet({id}));
  }

  create(data: {trainingId: string, exerciseId: string}) {
    this.store.dispatch(SetActions.createSet({data}));
  }

  onCreated(): Observable<SetCreatePayload> {
    return this.actions.pipe(
      ofType(SetActions.createSetSuccess),
      map(action => action.data)
    );
  }
}
