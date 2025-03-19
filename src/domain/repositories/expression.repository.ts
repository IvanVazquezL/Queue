export abstract class ExpressionRepository {
    abstract saveExpression( expression: string ): Promise<void>;
    abstract getAllExpressions(): Promise<string[]>;
}