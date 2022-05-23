import { createAction, props } from '@ngrx/store';

export const createSet = createAction(
  '[Set] Create Set',
  props<{ data: any }>()
);

export const createSetSuccess = createAction(
  '[Set] Create Set Success',
  props<{ data: any }>()
);

export const createSetFailure = createAction(
  '[Set] Create Set Failure',
  props<{ error: any }>()
);

export const selectSet= createAction(
  '[Execution] Select Set',
  props<{ id: string }>()
);