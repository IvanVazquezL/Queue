export class Process {
    constructor(
        private processName: string,
        private priority: number,
        private functionName: string
    ) {}

    getPriority(): number {
        return this.priority;
    }

    static fromObject( object: { [key: string]: any } ): Process {
        const {
            processName,
            priority,
            functionName
        } = object;

        const process = new Process(
            processName,
            priority,
            functionName
        );
        return process;
    }
}