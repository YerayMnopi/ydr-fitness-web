import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { State } from './training.reducer';
import { Observable } from 'rxjs';
import { getCurrentTraining, selectAllTrainings } from './training.selectors';
import * as TrainingActions from './training.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Training } from './training';
import { map } from 'rxjs/operators';
import { BrowserService } from 'ydr-ng-common';

@Injectable()
export class TrainingsFacade {

  trainings: Observable<Training[]>;
  currentTraining: Observable<Training | null>;
  loadError: Observable<Action>;

  constructor(
    public store: Store<State>,
    public actions: Actions,
    private browserService: BrowserService
  ) {
    const trainings = this.browserService.retrieveFromLocalStorage('trainings');
    if (trainings) {
      this.store.dispatch(TrainingActions.loadTrainingsSuccess({data: trainings}))
    }
    this.trainings = store.pipe(select(selectAllTrainings));
    this.currentTraining = store.pipe(select(getCurrentTraining));
    this.loadError = this.actions.pipe(ofType(TrainingActions.loadTrainingsFailure));
  }

  load() {
    this.store.dispatch(TrainingActions.loadTrainings());
  }

  select(id: string) {
    this.store.dispatch(TrainingActions.selectTraining({id}));
  }

  create() {
    this.store.dispatch(TrainingActions.createTraining());
  }

  onCreated(): Observable<Training> {
    return this.actions.pipe(
      ofType(TrainingActions.createTrainingSuccess),
      map(action => action.data)
    );
  }

  delete(id:string) {
    this.store.dispatch(TrainingActions.deleteTraining({id}));
  }
}
