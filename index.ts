import {ICalculation} from "./model/calculations/ICalculation";
import {MaxCalculation} from "./model/calculations/imp/MaxCalculation";
import {AvgCalculation} from "./model/calculations/imp/AvgCalculation";
import {MinCalculation} from "./model/calculations/imp/MinCalculation";
import {SumCalculation} from "./model/calculations/imp/SumCalculation";
import {stringToArray} from "./model/utils/ArrayUtil";
import {validateInput} from "./model/utils/InputDataValidation"
import {IOutputProvider} from "./model/IO/output/IOutputProvider";
import {IInputProvider} from "./model/IO/input/IInputProvider";
import {ConsoleInput} from "./model/IO/input/imp/ConsoleInput";
import {ConsoleOutput} from "./model/IO/output/imp/ConsoleOutput";

let outputProvider:IOutputProvider;
let inputProvider:IInputProvider;

function initCalcs(): Array<ICalculation> {
    const calcs = new Array<ICalculation>();
    calcs.push(new MaxCalculation());
    calcs.push(new AvgCalculation());
    calcs.push(new MinCalculation());
    calcs.push(new SumCalculation());

    return calcs;
}

async function input(): Promise<string> {
    let value = "";

    while (!validateInput(value)) {
        outputProvider.output("Enter number");
        value = await inputProvider.read();
    }

    return value;
}

function outputResult(opName: string, result: number) {
    outputProvider.output(`Result of operation ${opName} is ${result}`);
}

function initInput(args: string[]) {
    if (args == null || !validateInput(args[0]))
        return input();

    return args[0];
}

function initIO() {
    inputProvider = new ConsoleInput();
    outputProvider = new ConsoleOutput();
}

async function main(args: string[]) {
    initIO();
    const inputData = await initInput(args);

    const data = stringToArray(inputData);

    const calcs = initCalcs();
    calcs.forEach((calculation) => {
        const res = calculation.execute(data);
        outputResult(calculation.operation, res);
    })
}

main(process.argv);