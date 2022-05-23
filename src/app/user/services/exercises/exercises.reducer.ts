import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Exercise } from './exercise';
import * as ExercisesActions from './exercises.actions';

export const exercisesFeatureKey = 'exercises';

export interface State extends EntityState<Exercise> {
  currentExerciseId: string|null;
}
 
export const adapter: EntityAdapter<Exercise> = createEntityAdapter<Exercise>();

export const initialState: State = adapter.getInitialState({
  currentExerciseId: null,
});

export const reducer = createReducer(
  initialState,
  on(ExercisesActions.loadExercisessSuccess, (state, action) => adapter.addMany(action.data, state)),
  on(ExercisesActions.selectExercise, (state, action) => ({...state, ...{currentExerciseId:  action.id}}))
);


