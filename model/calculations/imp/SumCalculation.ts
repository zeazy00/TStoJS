import {ICalculation} from "../ICalculation";
import {Operations} from "./Operations";

export class SumCalculation implements ICalculation {
    readonly operation: Operations;

    constructor() {
        this.operation = Operations.SUM;
    }

    execute(input: Array<number>): number {
        return input.reduce((prev, cur) => prev + cur, 0);
    }

}