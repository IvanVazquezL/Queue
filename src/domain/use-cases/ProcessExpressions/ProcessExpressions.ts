import { MongoQueueDatasource } from "../../../infrastructure/datasources/queue.datasource";
import { QueueRepositoryImpl } from "../../../infrastructure/repositories/queue.repository.impl";
import { Utils } from "../../../utils/Utils";
import { IProcess } from "../interfaces/IProcess";

const mongoQueueRepository = new QueueRepositoryImpl(
    new MongoQueueDatasource()
)

interface ExpressionObjectQueue {
    expression: string;
}
 
export class ProcessExpressions implements IProcess {
    async execute(data: ExpressionObjectQueue): Promise<void> {
        const { expression } = data;
        const singularExpressions = Utils.extractExpressionsWithoutParentheses(expression);
            
        for (const singularExpression of singularExpressions) {
            const operator = Utils.extractOperator(singularExpression);
            const process = Utils.operatorToProcess(operator!);

            await mongoQueueRepository.addToQueue(
                process,
                { expression: singularExpression }
            );
        }
    }
}