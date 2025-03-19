import { Operation } from "./Operation";

export class Addition extends Operation {
    protected key: string = '';
    protected result: number = 0;

    constructor(expression: string) {
        super(expression);
    }
}