import { SetCreatePayload } from '../set/set';
import { Exercise } from '../exercises/exercise';

export interface Execution {
    id: string;
    createdAt: string;
    userId: string;
    trainingId: string;
    exercise: Exercise;
    sets: SetCreatePayload[];
    volume: number;
}
