import { MongoExpressionDatasource } from "../infrastructure/datasources/expression.datasource";
import { MongoQueueDatasource } from "../infrastructure/datasources/queue.datasource";
import { ExpressionRepositoryImpl } from "../infrastructure/repositories/expression.repository.impl";
import { QueueRepositoryImpl } from "../infrastructure/repositories/queue.repository.impl";

const mongoExpressionRepository = new ExpressionRepositoryImpl(
    new MongoExpressionDatasource(),
);
const mongoQueueRepository = new QueueRepositoryImpl(
    new MongoQueueDatasource()
)

export class Expression {
    constructor(private expression: string) {}

    static async addExpressionsToQueue(): Promise<void> {
        const expressions = await mongoExpressionRepository.getAllExpressions();

        for (const expression of expressions) {
            await mongoQueueRepository.addToQueue(
                'Expressions',
                { expression }
            );
        }
    }
}