import assert = require("assert");
import {SumCalculation} from "../../model/calculations/imp/SumCalculation";

describe('Sum calculation test', () => {
    it('valid input test', function () {
        //arrange
        const input = [1, 2, 4, 6, 6, 4];
        const calc = new SumCalculation();

        //act
        const res = calc.execute(input);

        //assert
        assert.deepStrictEqual(res, 23);
    });

    it('empty input valid test', function () {
        //arrange
        const input = [];
        const calc = new SumCalculation();

        //act
        const res = calc.execute(input);

        //assert
        assert.deepStrictEqual(res, 0);
    });

});