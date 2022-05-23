import { createAction, props } from '@ngrx/store';

export const loadTrainings = createAction(
  '[Training] Load Trainings'
);

export const loadTrainingsSuccess = createAction(
  '[Training] Load Trainings Success',
  props<{ data: any }>()
);

export const loadTrainingsFailure = createAction(
  '[Training] Load Trainings Failure',
  props<{ error: any }>()
);

export const selectTraining = createAction(
  '[Training] Select Training',
  props<{ id: string }>()
);

export const createTraining = createAction(
  '[Training] Create Training'
);

export const createTrainingSuccess = createAction(
  '[Training] Create Training Success',
  props<{ data: any }>()
);

export const createTrainingFailure = createAction(
  '[Training] Create Training Failure',
  props<{ error: any }>()
);

export const deleteTraining = createAction(
  '[Training] Delete Training',
  props<{ id: string }>()
);

export const deleteTrainingSuccess = createAction(
  '[Training] Delete Training Success',
  props<{ id: string }>()
);

export const deleteTrainingFailure = createAction(
  '[Training] Delete Training Failure',
  props<{ error: any }>()
);
