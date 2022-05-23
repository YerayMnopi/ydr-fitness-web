import { on } from '@ngrx/store';
import { State } from '../training/training.reducer';
import * as SetActions from './set.actions';


export const setsReducers = [
  on<State, any>(SetActions.selectSet, (state: State, action: any) => ({...state, ...{currentSetId:  action.id}})),
  on<State, any>(
    SetActions.createSetSuccess, 
    (state: State, action: any) => {
    if (state.currentTrainingId && state.currentExecutionId) {
      const currentTraining = state.entities[state.currentTrainingId];
      
      if (currentTraining) {
        const execution = currentTraining.executions.find(exe => exe.id === state.currentExecutionId);

        if (execution) {
          if (!execution.sets) {
            execution.sets = [];
          }
          const sets = execution.sets.concat(action.data);
          execution.sets = sets;
          state.entities[state.currentTrainingId] = currentTraining;
          return {...state};
        }
      }
    }
    return state;
  }),

];

