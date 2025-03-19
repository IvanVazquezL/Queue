import { ExpressionModel } from "../data/mongo/models/expression.model";

export class Utils {
    static extractExpressionsWithoutParentheses(expression: string): string[] {
        const regex = /\(([^()]+)\)/g;
        const insideExpressions = expression.match(regex);
        return insideExpressions!.map(exp => exp.slice(1, -1));
    }

    static extractSingleOperator(expression: string): string | null {
        const regex = /\)\s*([+\-*/])\s*\(/;
        const match = expression.match(regex);
    
        return match ? match[1] : null;
    }

    static extractOperator(expression: string): string | null {
        const regex = /[\+\-\*\/]/;
        const match = expression.match(regex);
        return match ? match[0] : null;
    }

    static operatorToProcess(operator: string): string {
        const operatorProcess: { [key: string]: string }  = {
            "*": "Multiplication",
            "/": "Division",
            "+": "Addition",
            "-": "Subtraction"
        };

        return operatorProcess[operator];
    }

    static parseExpression(expression: string): (number | string)[] {
        return expression.match(/(\d+|\+|\-|\*|\/)/g) ?? [];
    }

    static async uploadExpressions() {
        const expressions = [
            "(10 / 2) + (3 * 6) + (12 - 4) + (8 * 7) + (15 / 5) + (9 - 1)",
            "(6 + 4) + (8 - 3) + (5 / 1) + (12 * 3) + (9 - 6) + (2 + 1)",
            "(7 * 5) - (18 / 3) - (11 - 4) - (2 + 3) - (14 / 2) - (3 * 2)",
            "(9 + 6) - (4 * 3) - (21 / 7) - (8 - 2) - (5 * 5) - (12 / 4)",
            "(15 - 9) - (6 * 3) - (2 + 4) - (20 / 5) - (7 - 3) - (18 / 6)",
            "(25 / 5) * (4 * 2) * (10 + 3) * (6 - 2) * (8 / 4) * (7 * 2)",
            "(30 - 12) * (6 + 2) * (5 * 9) * (14 / 7) * (3 + 1) * (8 - 5)",
            "(16 / 4) * (7 - 2) * (5 * 3) * (12 / 6) * (20 - 14) * (9 * 2)",
            "(18 - 6) * (4 + 2) * (5 * 7) * (16 / 4) * (3 + 8) * (2 - 1)"
        ]
    
        for (const expression of expressions) {
            await ExpressionModel.create({
                expression
            });
        }
    }
}