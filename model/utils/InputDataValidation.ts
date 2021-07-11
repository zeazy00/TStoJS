export const MAX_SIZE = 1000;

export function validateInput(input: string): boolean {
    if (input == null || input.length == 0 || input.length > MAX_SIZE)
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