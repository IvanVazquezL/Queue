import { MongoProcessDatasource } from "../infrastructure/datasources/process.datasource";
import { ProcessRepositoryImpl } from "../infrastructure/repositories/process.repository.impl";

export class Queue {
    private priority: Number = 0;
    private status: string = 'pending';
    private createdAt: Date = new Date();
    private updatedAt: Date = new Date();
    private errorMessage: string = '';

    constructor(
        private data: string = '',
        private type: string = '',
    ) {}

    getType(): string {
        return this.type;
    }

    getData(): string {
        return this.data;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    setUpdatedAt(updatedAt: Date): void {
        this.updatedAt = updatedAt;
    }

    setErrorMessage(errorMessage: string): void {
        this.errorMessage = errorMessage;
    }

    static async createQueue(type: string, data: object): Promise<Queue> {
        const queue = new Queue(
            type,
            JSON.stringify(data)
        );

        const mongoProcessRepository = new ProcessRepositoryImpl(
            new MongoProcessDatasource()
        );

        const process = await mongoProcessRepository.getProcessByName(type);
        queue.priority = process.getPriority();

        return queue;
    }

    static fromObject( object: { [key: string]: any } ): Queue {
        const {
            data,
            type,
            priority,
            status,
            createdAt,
            updatedAt,
            errorMessage
        } = object;

        const queue = new Queue();

        queue.data = data;
        queue.type = type;
        queue.priority = priority;
        queue.status = status;
        queue.createdAt = createdAt;
        queue.updatedAt = updatedAt;
        queue.errorMessage = errorMessage;

        return queue;
    }
}