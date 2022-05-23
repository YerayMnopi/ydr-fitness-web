import { on } from '@ngrx/store';
import { State } from '../training/training.reducer';
import * as ExecutionActions from './execution.actions';

export const executionsReducers = [
  on<State, any>(ExecutionActions.selectExecution, (state: State, action: any) => ({...state, ...{currentExecutionId:  action.id}})),
  on<State, any>(
    ExecutionActions.createExecutionSuccess, 
    (state: State, action: any) => {
    if (state.currentTrainingId) {
      const currentTraining = state.entities[state.currentTrainingId];
      let executions = state.entities[state.currentTrainingId]?.executions || []
      executions = executions.concat([action.data]);
      
      if (currentTraining && executions) {
        currentTraining.executions = executions;
        state.entities[state.currentTrainingId] = currentTraining;
        return {...state};
      }
    }
    return state;
  }),

];

