import * as fromExecution from './execution.reducer';
import { selectExecutionState } from './execution.selectors';

describe('Execution Selectors', () => {
  it('should select the feature state', () => {
    const result = selectExecutionState({
      [fromExecution.executionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
