const assert = require('chai').assert;

const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays")

describe("#eqArrays", () => {

  it("should return False when array1 is !equal to array 2", () => {
    assert.isFalse(eqArrays([1, 2], [1, 2, 3]))
  });

  it("should return True when array1 is equal to array 2", () => {
    assert.isTrue(eqArrays([1, 2], [1, 2]))
  });

});


// console.log(eqArrays([2, 3], [2, 4])) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)