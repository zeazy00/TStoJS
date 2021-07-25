import assert = require("assert");
import {Operations} from "../../model/calculations/imp/Operations";
import {MaxCalculation} from "../../model/calculations/imp/MaxCalculation";

describe('Max calculation test', () => {
    it('valid input test', function () {
        //arrange
        const input = [1, 2, 4, 6, 6, 4];
        const calc = new MaxCalculation();

        //act
        const res = calc.execute(input);

        //assert
        assert.deepStrictEqual(res, 6);
    });

    it('empty input invalid test', function () {
        //arrange
        const input = [];
        const calc = new MaxCalculation();

        //act & assert
        assert.throws(() => calc.execute(input),
            new Error(`Input collection is empty! Can't perform ${Operations.MAX} operation`));
    });

});