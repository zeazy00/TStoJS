import {ICalculation} from "../ICalculation";

export class MaxCalculation implements ICalculation{
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.MAX;
    }

    execute(input: Array<number>): number {
        return 0;
    }

}