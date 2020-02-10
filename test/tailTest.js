const assert = require ("chai").assert;
const tail = require ("../tail")
const assertEqual = require ("../assertEqual")

describe("#tail", () => {

  it("should return the same array without the first element [0]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6, 7, 8, 9]),[2, 3, 4, 5, 6, 7, 8, 9])
  });

});


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words)); // no need to capture the return value since we are not checking it
