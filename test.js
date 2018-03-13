var assert = require("assert")
var findlongestarray = require("./findlongestarray");

describe("Test longest array", function(){


    it("Get the longes array", function(){
        const expected = 6;
        const array = [0,1, 0,2, 1, 0, 1,,2, 1, 0,];
        const maxNum = 4;
        const result= findlongestarray.maxLength(array, maxNum);
        assert.equal(expected, result);
    });

    it("Get the longes array", function(){
        const expected = 6;
        const array = [3, 2, 1, 0, 1, 2, 0];
        const maxNum = 8;
        const result= findlongestarray.maxLength(array, maxNum);
        assert.equal(expected, result);
    });

    it("Get the longes array", function(){
        const expected = 5;
        const array = [0,2, 1, 2, 1, 0, 1, 1, 0];
        const maxNum = 3;
        const result= findlongestarray.maxLength(array, maxNum);
        assert.equal(expected, result);
    });


})
