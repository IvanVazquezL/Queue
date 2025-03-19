import { Multiplication } from "../../entities/Multiplication.entity";

export abstract class MultiplicationRepository {
    abstract saveMultiplication(multiplication: Multiplication):Promise<void>;
    abstract getMultiplication(key: string):Promise<Multiplication>;
}