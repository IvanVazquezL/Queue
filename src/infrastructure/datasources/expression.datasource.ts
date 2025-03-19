import { ExpressionModel } from "../../data/mongo/models/expression.model";
import { ExpressionDatasource } from "../../domain/datasources/Expression.datasource";

export class MongoExpressionDatasource extends ExpressionDatasource {
    async saveExpression(expression: string): Promise<void> {
        await ExpressionModel.create({
            expression
        });
    }

    async getAllExpressions(): Promise<string[]> {
        const expressions = await ExpressionModel.find();
        return expressions.map(expression => expression.expression);
    }  
  }