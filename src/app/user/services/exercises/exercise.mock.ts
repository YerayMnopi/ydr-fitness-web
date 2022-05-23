import { Exercise } from './exercise';

export const exerciseMockFactory = (): Exercise => {

    return {
        id: 'test',
        name: 'test',
        createdAt: new Date(),
    } as Exercise;
};