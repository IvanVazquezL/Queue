import { MultiplicationModel } from "../../data/mongo/models/multiplication.model";
import { MultiplicationDatasource } from "../../domain/datasources/Multiplication.datasource";
import { Multiplication } from "../../entities/Multiplication.entity";

export class MongoMultiplicationDatasource extends MultiplicationDatasource{
    async saveMultiplication(multiplication: Multiplication): Promise<void> {
        await MultiplicationModel.create(multiplication);
    }

    async getMultiplication(key: string): Promise<Multiplication> {
        const multiplication = await MultiplicationModel.find({ key });
        return Multiplication.fromObject(multiplication);
    }
}