import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { executionsReducers } from '../execution/execution.reducer';
import { setsReducers } from '../set/set.reducer';
import { Training } from './training';
import * as TrainingActions from './training.actions';

export const trainingFeatureKey = 'training';

export interface State extends EntityState<Training> {
  currentTrainingId: string|null;
  currentExecutionId: string|null;
}
 
export const adapter: EntityAdapter<Training> = createEntityAdapter<Training>();

export const initialState: State = adapter.getInitialState({
  currentTrainingId: null,
  currentExecutionId: null
});

export const reducer = createReducer(
  initialState,
  on(TrainingActions.loadTrainingsSuccess, (state, action) => adapter.addMany(action.data, state)),
  on(TrainingActions.selectTraining, (state, action) => ({...state, ...{currentTrainingId:  action.id}})),
  on(TrainingActions.createTrainingSuccess, (state, action) => adapter.addOne(action.data, state)),
  on(TrainingActions.deleteTrainingSuccess, (state, action) => adapter.removeOne(action.id, state)),
  ...executionsReducers,
  ...setsReducers
);

