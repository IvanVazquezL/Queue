import { ExpressionDatasource } from "../../domain/datasources/Expression.datasource";
import { ExpressionRepository } from "../../domain/repositories/expression.repository";

export class ExpressionRepositoryImpl extends ExpressionRepository {
    constructor(
      private readonly expressionDatasource: ExpressionDatasource 
    ) {
        super();
    }
  
    async saveExpression(expression: string): Promise<void> {
      return this.expressionDatasource.saveExpression(expression);
    }
  
    async getAllExpressions(): Promise<string[]> {
      return this.expressionDatasource.getAllExpressions();
    }
}