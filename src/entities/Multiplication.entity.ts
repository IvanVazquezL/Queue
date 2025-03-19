import { Operation } from "./Operation";

export class Multiplication extends Operation{
    protected key: string = '';
    protected result: number = 0;

    constructor(expression: string) {
        super(expression);
    }

    static fromObject(object: { [key: string]: any}): Multiplication {
        const { key } = object;

        const multiplication = new Multiplication(key);
        return multiplication;
    }
}