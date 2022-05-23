import { Training } from './training';

export const trainingMockFactory = (): Training => {

    return {
        id: 'test',
        createdAt: new Date(),
    } as Training;
};