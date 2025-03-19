import { IProcess } from "../interfaces/IProcess";
import { ProcessExpressions } from "../ProcessExpressions/ProcessExpressions";

export class ProcessFactory {
    static getProcess(type: string): IProcess {
        const processMap: Record<string, IProcess> = {
            "Expressions": new ProcessExpressions(),
            "Multiplication": new ProcessMultiplication()
        };

        const process = processMap[type];

        if (!process) {
            throw new Error(`Unknown process type: ${type}`);
        }

        return process;
    }
}