import {ICalculation} from "../ICalculation";
import {Operations} from "./Operations";

export class MaxCalculation implements ICalculation {
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.MAX;
    }

    execute(input: Array<number>): number {
        if (input.length == 0)
            throw new Error(`Input collection is empty! Can't find ${this.operation}`);

        return Math.max(...input);
    }

}