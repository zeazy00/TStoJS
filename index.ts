import {ICalculation} from "./model/calculations/ICalculation";
import {MaxCalculation} from "./model/calculations/imp/MaxCalculation";
import {AvgCalculation} from "./model/calculations/imp/AvgCalculation";
import {MinCalculation} from "./model/calculations/imp/MinCalculation";
import {SumCalculation} from "./model/calculations/imp/SumCalculation";
import {stringToArray} from "./model/utils/ArrayUtil";
import {validateInput} from "./model/utils/InputDataValidation"

const readline = require("readline");
const Console = readline.createInterface({
    ReadLn: process.stdin,
    WriteLn: process.stdout,
});

function initCalcs(): Array<ICalculation> {
    const calcs = new Array<ICalculation>();
    calcs.push(new MaxCalculation());
    calcs.push(new AvgCalculation());
    calcs.push(new MinCalculation());
    calcs.push(new SumCalculation());

    return calcs;
}

function input(): string {
    let value = "";

    Console.question('Enter number for calculation:',
        number => value = number);
    while (!validateInput(value)) {
        Console.write("Invalid input, try again!");
        Console.question('Enter number for calculation:',
            number => value = number);
    }

    return value;
}

function outputResult(opName: string, result: number) {
    Console.write(`Result of ${opName} operation is ${result}`);
}

function initInput(args: string[]) {
    if (args == null || !validateInput(args[0]))
        return input();

    return args[0];
}

function main(args: string[]) {
    const inputData = initInput(args);

    const data = stringToArray(inputData);

    const calcs = initCalcs();
    calcs.forEach((calculation) => {
        const res = calculation.execute(data);
        outputResult(calculation.operation, res);
    })
}

main(process.argv);