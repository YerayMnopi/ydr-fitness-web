import { Spied } from 'ydr-ng-common';
import { TrainingsFacade } from './trainings.facade';
import { BehaviorSubject, Subject } from 'rxjs';
import { Training } from './training';
import { trainingMockFactory } from './training.mock';

export type TrainingsFacadeMock = Spied<TrainingsFacade> & {
  load: (value: Training | null) => {}
  sendLoadError: () => {}
};

export const TrainingsFacadeMockFactory = (): TrainingsFacadeMock => {
  const trainingsServiceMock = jasmine.createSpyObj(
    'TrainingsFacadeMockFactory',
    ['load'],
  );

  trainingsServiceMock.trainings = new BehaviorSubject([trainingMockFactory()]);
  trainingsServiceMock.loadError = new Subject();
  trainingsServiceMock.changeTrainings = (value: Training | null) => {
    trainingsServiceMock.trainings.next(value);
  };
  trainingsServiceMock.sendLoadError = () => {
    trainingsServiceMock.loadError.next(new Error());
  };
  return trainingsServiceMock;
};
