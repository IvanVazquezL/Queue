import { ProcessDatasource } from "../../domain/datasources/Process.datasource";
import { ProcessRepository } from "../../domain/repositories/process.repository";
import { Process } from "../../entities/Process.entity";

export class ProcessRepositoryImpl extends ProcessRepository {
    constructor(
        private readonly processDatasource: ProcessDatasource 
    ) {
        super();
    }

    async saveProcess(process: Process): Promise<void> {
        await this.processDatasource.saveProcess(process);
    }

    async getProcessByName(name: string): Promise<Process> {
        const process = await this.processDatasource.getProcessByName(name);
        return process;
    }

    async getProcessByPriority(priority: number): Promise<Process[]> {
        const processes = await this.processDatasource.getProcessByPriority(priority);
        return processes;
    }
}