import {stringToNumberArray} from "../../model/utils/ArrayUtil"
import assert = require("assert");
import {MAX_SIZE} from "../../model/utils/InputDataValidation";

describe('Validate input converter ArrayUtils.ts', () => {
    it('valid parsing', function () {
        //arrange
        let input = "12324";
        let expected = [1, 2, 3, 2, 4];

        //act
        let res = stringToNumberArray(input);

        //assert
        assert.deepStrictEqual(res, expected);
    });

    it('invalid input with digits, parsing Error', function () {
        //arrange
        let input = "12d324";

        //act + assert
        assert.throws(() => stringToNumberArray(input),
            new Error(`Invalid input! String must contain digits only`));
    });

    it('huge str ok parse', function () {
        //arrange
        let input = "";
        let expected = [];
        for (let i = 1; i < 1000; i++) {
            const val = i % 10;

            input += val;
            expected.push(val);
        }

        //act
        let res = stringToNumberArray(input);

        //assert
        assert.deepStrictEqual(res,expected);

    });
});