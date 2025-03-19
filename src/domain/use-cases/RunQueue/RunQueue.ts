import { Queue } from "../../../entities/Queue.entity";
import { MongoQueueDatasource } from "../../../infrastructure/datasources/queue.datasource";
import { QueueRepositoryImpl } from "../../../infrastructure/repositories/queue.repository.impl";
import { ProcessExpressions } from "../ProcessExpressions/ProcessExpressions";
import { ProcessFactory } from "../ProcessFactory/ProcessFactory";

const mongoQueueRepository = new QueueRepositoryImpl(
    new MongoQueueDatasource()
)

export class RunQueue {
    static async start(): Promise<void> {
        const pendingRecords = await mongoQueueRepository.getAllPending();

        for (const pendingRecord of pendingRecords) {
            const objectData = JSON.parse(pendingRecord.getData());
            const process = ProcessFactory.getProcess(pendingRecord.getType());

            try {
                await process.execute(objectData);
                pendingRecord.setStatus('completed');
                await mongoQueueRepository.updateQueueRecord(pendingRecord);
            } catch (error) {
                pendingRecord.setStatus('failed');
                pendingRecord.setErrorMessage(JSON.stringify(error));
                await mongoQueueRepository.updateQueueRecord(pendingRecord);
            }
        }
    }
}