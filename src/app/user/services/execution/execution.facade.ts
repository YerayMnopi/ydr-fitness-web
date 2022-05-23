import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { State } from '../training/training.reducer';
import { Observable } from 'rxjs';
import { getCurrentExecution } from './execution.selectors';
import * as ExecutionActions from './execution.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Execution } from './execution';
import { map } from 'rxjs/operators';

@Injectable()
export class ExecutionFacade {

  currentExecution: Observable<Execution | undefined>;

  constructor(
    public store: Store<State>,
    public actions: Actions
  ) {
    this.currentExecution = store.pipe(select(getCurrentExecution));
  }

  select(id: string) {
    this.store.dispatch(ExecutionActions.selectExecution({id}));
  }

  create(data: {trainingId: string, exerciseId: string}) {
    this.store.dispatch(ExecutionActions.createExecution({data}));
  }

  onCreated(): Observable<Execution> {
    return this.actions.pipe(
      ofType(ExecutionActions.createExecutionSuccess),
      map(action => action.data)
    );
  }
}
