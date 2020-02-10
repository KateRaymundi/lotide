const assertEqual = require ("./assertEqual");

const eqArrays = function(arr1, arr2){

  let result;
  if(arr1.length !== arr2.length){
    return false
  }
  for (i = 0; i < arr1.length; i++){
    if(arr1[i] === arr2[i]){
      result = true
    }
    else {
      return false
    }
  }
  return result
} 


module.exports = eqArrays;


