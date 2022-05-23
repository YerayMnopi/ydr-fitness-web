import { createAction, props } from '@ngrx/store';

export const createExecution = createAction(
  '[Execution] Create Executions',
  props<{ data: any }>()
);

export const createExecutionSuccess = createAction(
  '[Execution] Create Executions Success',
  props<{ data: any }>()
);

export const createExecutionFailure = createAction(
  '[Execution] Create Executions Failure',
  props<{ error: any }>()
);

export const selectExecution = createAction(
  '[Execution] Select Execution',
  props<{ id: string }>()
);