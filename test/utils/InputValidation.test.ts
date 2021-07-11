import {validateInput} from "../../model/utils/InputDataValidation";
import * as assert from "assert";

describe('Validate input',()=>{
    it('digits only input string', function () {
        //arrange
        let input = "45456";

        //act
        let res = validateInput(input);

        //assert
        assert.ok(res);
    });

    it('empty input string', function () {

    });

    it('digits & chars input string', function () {

    });
})