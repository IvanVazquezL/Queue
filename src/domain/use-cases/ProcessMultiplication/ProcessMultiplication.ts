import { Multiplication } from "../../../entities/Multiplication.entity";
import { IProcess } from "../interfaces/IProcess";

const mongoMultiplicationRepository = new MultiplicationRepositoryImpl(
    new MongoMultiplicationDatasource()
);

interface MultiplicationObjectQueue {
    expression: string
}

export class ProcessMultiplication implements IProcess {
    async execute(data: MultiplicationObjectQueue): Promise<void> {
        const { expression } = data;

        const multiplication = new Multiplication(expression);
        await mongoMultiplicationRepository.saveMultiplication(multiplication);
    }
}