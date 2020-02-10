const assert = require('chai').assert;

const middle = require("../middle")
describe("#middle", () => {

  it("should return exact middle of an array when the array is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]),[5])
  });

  it("should return two middles position when an array is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
  });
  
  // it("should return two middles position when an array is even", () => {
  //   assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  // }); mudar o parametro para a array vazia [], 1, 2


});

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
