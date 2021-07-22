import {ICalculation} from "../ICalculation";
import {Operations} from "./Operations";

export class AvgCalculation implements ICalculation {
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.AVG;
    }

    execute(input: Array<number>): number {
        if (input.length == 0)
            throw new Error(`Input collection is empty! Can't perform ${this.operation} operation`);

        const sum = input.reduce((prev, cur) => prev + cur, 0);
        return sum / input.length;
    }

}