import { ProcessModel } from "../../data/mongo/models/process.model";
import { ProcessDatasource } from "../../domain/datasources/Process.datasource";
import { Process } from "../../entities/Process.entity";

export class MongoProcessDatasource extends ProcessDatasource {
    async saveProcess(process: Process): Promise<void> {
        await ProcessModel.create(process);
    }

    async getProcessByName(processName: string): Promise<Process> {
        const process = await ProcessModel.findOne({ processName });
        return Process.fromObject(process!);
    }

    async getProcessByPriority(priority: number): Promise<Process[]> {
        const processes = await ProcessModel.find({ priority });
        return processes.map(Process.fromObject);
    }
}