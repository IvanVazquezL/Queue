export abstract class Operation {
    protected key: string = '';
    protected result: number = 0;

    constructor(expression: string) {
        const [ num1, operator, num2] = expression.split(' ');
        this.key = num1 > num2 ?
            `${num1} ${operator} ${num2}` :
            `${num2} ${operator} ${num1}`;
        this.result = eval(expression);
    }

    static fromObject(object: { [key: string]: any }): Operation {
        throw new Error('Method not implemented.');
    }
}