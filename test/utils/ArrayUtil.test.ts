import {stringToArray} from "../../model/utils/ArrayUtil"
import assert = require("assert");
import {MAX_SIZE} from "../../model/utils/InputDataValidation";

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
            new Error(`Invalid input! String must contain digits only and be shorter than ${MAX_SIZE}`));
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
        let res = stringToArray(input);

        //assert
        assert.deepStrictEqual(res,expected);

    });

    it('huge str error parse', function () {
        //arrange
        let input = "";
        for (let i = 1; i < 1050; i++) {
            const val = i % 10;
            input += val;
        }

        //act + assert
        assert.throws(() => stringToArray(input),
            new Error(`Invalid input! String must contain digits only and be shorter than ${MAX_SIZE}`));

    });
});