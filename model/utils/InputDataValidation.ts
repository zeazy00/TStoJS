export function validateInput(input: string): boolean {
    if (input.length == 0)
        return false;

    for (let i = 0; i < input.length; i++) {
        if (!isNumber(input[i]))
            return false;
    }
    return true;
}

function isNumber(char: string): boolean {
    return char >= '0' && char <= '9';
}