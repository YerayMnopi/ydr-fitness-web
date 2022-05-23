import * as fromSet from './set.actions';

describe('createSets', () => {
  it('should return an action', () => {
    expect(fromSet.createSets().type).toBe('[Set] Create Sets');
  });
});
