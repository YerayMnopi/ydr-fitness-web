import { SetCreatePayload } from './set';
import { Exercise } from './exercise';

export interface Execution {
    id: string;
    createdAt: string;
    userId: string;
    trainingId: string;
    exercise: Exercise;
    sets: SetCreatePayload[];
    volume: number;
}
