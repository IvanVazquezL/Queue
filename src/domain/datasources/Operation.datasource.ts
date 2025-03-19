import { Operation } from "../../entities/Operation";

export abstract class OperationDatasource {
    abstract saveOperation(operation: Operation): Promise<void>;
    abstract getOperation(key: string): Promise<Operation>;
}