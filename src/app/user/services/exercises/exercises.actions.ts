import { createAction, props } from '@ngrx/store';

export const loadExercisess = createAction(
  '[Exercises] Load Exercisess'
);

export const loadExercisessSuccess = createAction(
  '[Exercises] Load Exercisess Success',
  props<{ data: any }>()
);

export const loadExercisessFailure = createAction(
  '[Exercises] Load Exercisess Failure',
  props<{ error: any }>()
);

export const selectExercise = createAction(
  '[Exercise] Select Exercise',
  props<{ id: string }>()
);
