export class MathParser {
    private tokens: string[] = [];
    private newTokens: (number | string)[] = [];
    private result: number = 0;

    constructor(
        private expression: string
    ) {
        this.tokens = this.expression.split(' ');
    }

    setExpression(expression: string): void {
        this.expression = expression;
        this.tokens = this.expression.split(' ');
        this.newTokens = [];
        this.result = 0;
    }

    evaluateExpression(): number {
        this.evaluateMultiplicationsAndDivisions();
        this.evaluateAdditionsAndSubstractions();
        return this.result;
    }

    private evaluateMultiplicationsAndDivisions(): void {
        const validTokens: string[] = ['*', '/']

        for (let i = 0; i < this.tokens.length; i++) {
            if (validTokens.includes(this.tokens[i])) {
                const num1 = Number(this.newTokens.pop());
                const num2 = Number(this.tokens[i + 1]);
                const result = this.tokens[i] === "*" ?
                    num1 * num2 :
                    num1 / num2;
                this.newTokens.push(result);
                i++;
            } else {
                this.newTokens.push(this.tokens[i]);
            }
        }
    }

    private evaluateAdditionsAndSubstractions(): void {
        this.result = Number(this.newTokens[0]);

        for (let i = 1; i < this.newTokens.length; i += 2) {
            const operator = this.newTokens[i];
            const num = Number(this.newTokens[i + 1]);

            if (operator === "+") {
                this.result += num;
            } else if (operator === "-") {
                this.result -= num;
            }
        }
    }
}

function main() {
    const mathParser = new MathParser("1 * 2 + 3 * 5 * 6 + 7 + 9 - 8");
    console.log(mathParser.evaluateExpression());
    mathParser.setExpression("4 * 3 + 6 * 2 + 8 + 5 - 7");
    console.log(mathParser.evaluateExpression());
}

main();
