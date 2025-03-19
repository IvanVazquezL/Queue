import { Operation } from "./Operation";

export class Division extends Operation{
    protected key: string = '';
    protected result: number = 0;

    constructor(expression: string) {
        super(expression);
    }
}