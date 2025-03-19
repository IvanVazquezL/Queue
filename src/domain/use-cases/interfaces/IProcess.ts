export interface IProcess {
    execute(data: any): Promise<void>;
}