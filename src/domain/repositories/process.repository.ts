import { Process } from "../../entities/Process.entity";

export abstract class ProcessRepository {
    abstract saveProcess(process: Process): Promise<void>;
    abstract getProcessByName(name: string): Promise<Process>;
    abstract getProcessByPriority(priority: number): Promise<Process[]>;
}