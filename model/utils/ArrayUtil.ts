import {validateInput} from "./InputDataValidation";

export function stringToArray(str: string): Array<number> {
    if (!validateInput(str))
        throw new Error('Invalid input! String must contain digits only');

    let result: Array<number> = new Array<number>()

    for (let i = 0; i < str.length; i++) {
        result.push(charToNumber(str.charAt(i)));
    }

    return result;
}

function charToNumber(char: string): number {
    return +char;
}