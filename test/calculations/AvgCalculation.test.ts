import assert = require("assert");
import {Operations} from "../../model/calculations/imp/Operations";
import {AvgCalculation} from "../../model/calculations/imp/AvgCalculation";

describe('Min calculation test', () => {
    it('valid input integer result', function () {
        //arrange
        const input = [4, 6, 6, 4];
        const calc = new AvgCalculation();

        //act
        const res = calc.execute(input);

        //assert
        assert.deepStrictEqual(res, 5);
    });

    it('valid input double result', function () {
        //arrange
        const input = [1, 2, 4, 6, 6, 4];
        const calc = new AvgCalculation();

        //act
        const res = calc.execute(input);

        //assert
        assert.deepStrictEqual(Math.round(res), 4);
    });

    it('empty input invalid test', function () {
        //arrange
        const input = [];
        const calc = new AvgCalculation();

        //act & assert
        assert.throws(() => calc.execute(input),
            new Error(`Input collection is empty! Can't perform ${Operations.AVG} operation`));
    });

});