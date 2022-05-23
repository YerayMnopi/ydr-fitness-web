import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExercises from './exercises.reducer';

export const selectExercisesState = createFeatureSelector<fromExercises.State>(
  fromExercises.exercisesFeatureKey
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = fromExercises.adapter.getSelectors();

export const selectAllExercises = createSelector(
  selectExercisesState,
  selectAll
);


export const getCurrentExercise = createSelector(
  selectExercisesState, 
  (state: fromExercises.State) =>
  state.currentExerciseId && state.entities[state.currentExerciseId] || null
);
