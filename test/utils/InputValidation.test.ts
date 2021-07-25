import {validateInput} from "../../model/utils/InputDataValidation";
import * as assert from "assert";

describe('Validate input InputDataValidation.ts',()=>{
    it('digits only input string', function () {
        //arrange
        let input = "45456";

        //act
        let res = validateInput(input);

        //assert
        assert(res);
    });

    it('empty input string', function () {
        //arrange
        let input = "";

        //act
        let res = validateInput(input);

        //assert
        assert(!res);
    });

    it('digits & chars input string', function () {
        //arrange
        let input = "ds4d52";

        //act
        let res = validateInput(input);

        //assert
        assert(!res);
    });
})