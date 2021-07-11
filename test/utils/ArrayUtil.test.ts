import {stringToArray} from "../../model/utils/ArrayUtil"
import assert = require("assert");

describe('Validate input converter ArrayUtils.ts', () => {
    it('valid parsing', function () {
        //arrange
        let input = "12324";
        let expected = [1, 2, 3, 2, 4];

        //act
        let res = stringToArray(input);

        //assert
        assert.deepStrictEqual(res, expected);
    });

    it('invalid input with digits, parsing Error', function () {
        //arrange
        let input = "12d324";

        //act + assert
        assert.throws(() => stringToArray(input),
                            new Error('Invalid input! String must contain digits only'));
    });
});