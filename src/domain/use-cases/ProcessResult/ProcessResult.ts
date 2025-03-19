import { Utils } from "../../../utils/Utils";
import { IProcess } from "../interfaces/IProcess";

interface ResultObjectQueue {
    expression: string
}

export class ProcessResult implements IProcess {
    async execute(data: ResultObjectQueue): Promise<void> {
        const { expression } = data;
        const operator = Utils.extractSingleOperator(expression);
        const singularExpressions = Utils.extractExpressionsWithoutParentheses(expression);

        for (const singularExpression of singularExpressions) {
            
        }
        
    }
}