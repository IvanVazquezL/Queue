import { Queue } from "../../entities/Queue.entity";

export abstract class QueueRepository {
    abstract addToQueue(type: string, data: object): Promise<void>;
    abstract updateQueueRecord(queue: Queue): Promise<void>;
    abstract getAllPending(key: string): Promise<Queue[]>;
}