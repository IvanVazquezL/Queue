import { Expression } from "../../entities/Expression.entity";

export abstract class ExpressionDatasource {
    abstract saveExpression(expression: string): Promise<void>;
    abstract getAllExpressions(): Promise<string[]>;
}