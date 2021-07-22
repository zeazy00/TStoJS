import {ICalculation} from "../ICalculation";
import {Operations} from "./Operations";

export class MinCalculation implements ICalculation {
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.MIN;
    }

    execute(input: Array<number>): number {
        if (input.length == 0)
            throw new Error(`Input collection is empty! Can't perform ${this.operation} operation`);

        return Math.min(...input);
    }

}