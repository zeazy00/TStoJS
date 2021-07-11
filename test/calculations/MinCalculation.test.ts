import {MinCalculation} from "../../model/calculations/imp/MinCalculation";
import assert = require("assert");
import {Operations} from "../../model/calculations/imp/Operations";

describe('Min calculation test', () => {
    it('valid input test', function () {
        //arrange
        const input = [1, 2, 4, 6, 6, 4];
        const calc = new MinCalculation();

        //act
        const res = calc.execute(input);

        //assert
        assert.deepStrictEqual(res, 1);
    });

    it('empty input invalid test', function () {
        //arrange
        const input = [];
        const calc = new MinCalculation();

        //act & assert
        assert.throws(() => calc.execute(input),
            new Error(`Input collection is empty! Can't find ${Operations.MIN}`));
    });

});