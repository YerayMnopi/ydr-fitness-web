import * as fromExercises from './exercises.reducer';
import { selectExercisesState } from './exercises.selectors';

describe('Exercises Selectors', () => {
  it('should select the feature state', () => {
    const result = selectExercisesState({
      [fromExercises.exercisesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
