import { Queue } from "../../entities/Queue.entity";

export abstract class QueueDatasource {
    abstract addToQueue(type: string, data: object): Promise<void>;
    abstract updateQueueRecord(queue: Queue): Promise<void>;
    abstract getAllPending(): Promise<Queue[]>;
}