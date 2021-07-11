import {ICalculation} from "../ICalculation";

export class AvgCalculation implements ICalculation{
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.AVG;
    }

    execute(input: Array<number>): number {
        return 0;
    }

}