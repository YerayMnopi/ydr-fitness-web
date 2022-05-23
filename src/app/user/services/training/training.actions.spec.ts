import * as fromTraining from './training.actions';

describe('loadTrainings', () => {
  it('should return an action', () => {
    expect(fromTraining.loadTrainings().type).toBe('[Training] Load Trainings');
  });
});
