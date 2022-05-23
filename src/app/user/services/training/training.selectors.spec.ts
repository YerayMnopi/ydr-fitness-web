import * as fromTraining from './training.reducer';
import { selectTrainingState } from './training.selectors';

describe('Training Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTrainingState({
      [fromTraining.trainingFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
