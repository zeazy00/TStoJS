import {ICalculation} from "../ICalculation";

export class SumCalculation implements ICalculation{
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.SUM;
    }

    execute(input: Array<number>): number {
        return 0;
    }

}