import { createSelector } from '@ngrx/store';
import * as fromTraining from '../training/training.selectors';


export const getCurrentExecution = createSelector(
  fromTraining.selectTrainingState,
  (state) => {
    if (!state.currentTrainingId) {
      return;
    }
    const currentTraining = state.entities[state.currentTrainingId];

    if (!currentTraining) {
      return;
    }

    return currentTraining.executions.find(execution => execution.id === state.currentExecutionId)
  }
  );
