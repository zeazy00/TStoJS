export function stringToArray(str: string): Array<number> {
    let result: Array<number> = new Array<number>()

    for (let i = 0; i < str.length; i++) {
        const digit = charToNumber(str.charAt(i));

        if (digit <= 9 && digit >= 0)
            result.push(digit);
        else
            throw new Error(`Invalid input! String must contain digits only`);
    }

    return result;
}

function charToNumber(char: string): number {
    return +char;
}