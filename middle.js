// TESTE ASSERTION FUNCTION
const eqArrays = require("./eqArrays")

const assertArrayEqual = require("./assertArrayEqual")

//ACTUAL FUNCTION 
const middle = function (mid){
  let center = mid.length / 2
  if(mid.length % 2 !== 0){
    return [mid[Math.floor(center)]]
  } else {
    return [mid[center - 1], mid[center]]
  }
}

module.exports = middle;


  
  