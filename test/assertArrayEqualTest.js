const assert = require('chai').assert;
const assertArrayEqual = require ("../assertArrayEqual")

describe("#assertArrayEqual", () => {

  it("should Assertion Failed when array1 is !equal to array 2", () => {
    assert.strictEqual(assertArrayEqual([1, 2], [1, 2, 3]))
  });

  it("should Assertion Passed when array1 is equal to array 2", () =>{
    assert.strictEqual(assertArrayEqual([1, 2, 3], [1, 2, 3]))
  });
  it("should Assertion Passed when array1 is equal to array 2", () =>{
    assert.strictEqual(assertArrayEqual([1, 2, 3], [1, 2, 3, 4]))
  });
});
