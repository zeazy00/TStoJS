export interface ICalculation {
    execute(input: Array<number>): number;
    readonly operation:Operations;
}