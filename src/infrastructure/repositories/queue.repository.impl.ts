import { QueueDatasource } from "../../domain/datasources/Queue.datasource";
import { QueueRepository } from "../../domain/repositories/queue.repository";
import { Queue } from "../../entities/Queue.entity";

export class QueueRepositoryImpl extends QueueRepository {
    constructor(
      private readonly queueDatasource: QueueDatasource 
    ) {
        super();
    }
  
    async addToQueue(type: string, data: object): Promise<void> {
        await this.queueDatasource.addToQueue(type, data);
    }

    async updateQueueRecord(queue: Queue) {
        await this.queueDatasource.updateQueueRecord(queue);
    }

    async getAllPending(): Promise<Queue[]> {
        const queues = await this.queueDatasource.getAllPending();
        return queues;
    }
}