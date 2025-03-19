import { Multiplication } from "../../entities/Multiplication.entity";

export abstract class MultiplicationDatasource {
    abstract saveMultiplication(multiplication: Multiplication):Promise<void>;
    abstract getMultiplication(key: string):Promise<Multiplication>;
}