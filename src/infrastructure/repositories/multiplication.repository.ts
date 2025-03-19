import { MultiplicationDatasource } from "../../domain/datasources/Multiplication.datasource";
import { MultiplicationRepository } from "../../domain/repositories/multiplication.repository";
import { Multiplication } from "../../entities/Multiplication.entity";

export class MultiplicationRepositoryImpl extends MultiplicationRepository {
    constructor(
        private readonly multiplicationDatasource: MultiplicationDatasource 
    ) {
        super();
    }
    
    async saveMultiplication(multiplication: Multiplication): Promise<void> {
        await this.saveMultiplication(multiplication);
    }

    async getMultiplication(key: string): Promise<Multiplication> {
        const multiplication = await this.getMultiplication(key);
        return multiplication;
    }
}