import * as fromSet from './set.reducer';
import { selectSetState } from './set.selectors';

describe('Set Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSetState({
      [fromSet.setFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
