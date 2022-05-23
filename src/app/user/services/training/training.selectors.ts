import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTraining from './training.reducer';

export const selectTrainingState = createFeatureSelector<fromTraining.State>(
  fromTraining.trainingFeatureKey
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromTraining.adapter.getSelectors();

export const selectAllTrainings = createSelector(
  selectTrainingState,
  selectAll
);

export const getCurrentTraining = createSelector(
  selectTrainingState, 
  (state: fromTraining.State) =>
  state.currentTrainingId && state.entities[state.currentTrainingId] || null
);
