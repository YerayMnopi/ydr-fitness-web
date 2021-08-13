import { Execution } from './execution';

export class Training {
    id!: string;
    createdAt: Date = new Date();
    executions: Execution[] = [];
}
