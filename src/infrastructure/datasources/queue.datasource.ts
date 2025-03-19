import { QueueModel } from "../../data/mongo/models/queue.model";
import { QueueDatasource } from "../../domain/datasources/Queue.datasource";
import { Queue } from "../../entities/Queue.entity";

export class MongoQueueDatasource extends QueueDatasource {
    async addToQueue(type: string, data: object): Promise<void> {
        const queue = await Queue.createQueue(type, data);
        await QueueModel.create(queue);
    }

    async updateQueueRecord(queue: Queue) {
        queue.setUpdatedAt(new Date());
        await QueueModel.create(queue);
    }

    async getAllPending(): Promise<Queue[]> {
        const records = await QueueModel
            .find({ status: 'pending' })
            .sort({ priority: 1 });
        return records.map(Queue.fromObject);
    }
    
}