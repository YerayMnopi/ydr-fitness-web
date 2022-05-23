import * as fromExercises from './exercises.actions';

describe('loadExercisess', () => {
  it('should return an action', () => {
    expect(fromExercises.loadExercisess().type).toBe('[Exercises] Load Exercisess');
  });
});
