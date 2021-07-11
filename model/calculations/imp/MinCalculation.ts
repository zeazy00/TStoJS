import {ICalculation} from "../ICalculation";

export class MinCalculation implements ICalculation {
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.MIN;
    }

    execute(input: Array<number>): number {
        return 0;
    }

}