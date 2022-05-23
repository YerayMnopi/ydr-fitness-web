import { Spied } from 'ydr-ng-common';
import { ExercisesFacade } from './exercises.facade';
import { BehaviorSubject, Subject } from 'rxjs';
import { Exercise } from './exercise';
import { exerciseMockFactory } from './exercise.mock';

export type ExercisesFacadeMock = Spied<ExercisesFacade> & {
  load: (value: Exercise | null) => {}
  sendLoadError: () => {}
};

export const ExercisesFacadeMockFactory = (): ExercisesFacadeMock => {
  const exercisesServiceMock = jasmine.createSpyObj(
    'ExercisesFacadeMockFactory',
    ['load'],
  );

  exercisesServiceMock.exercises = new BehaviorSubject([exerciseMockFactory()]);
  exercisesServiceMock.loadError = new Subject();
  exercisesServiceMock.changeExercises = (value: Exercise | null) => {
    exercisesServiceMock.exercises.next(value);
  };
  exercisesServiceMock.sendLoadError = () => {
    exercisesServiceMock.loadError.next(new Error());
  };
  return exercisesServiceMock;
};
