const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  }   else {
    console.log(`\u{274C} \u{274C} \u{274C} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){

  let result;
  if(arr1.length !== arr2.length){
    result = false
  }
  arr1.forEach(function(readArr1) { // this is called callback function  
  
    arr2.forEach(function(readArr2) {
  
      if(arr1[readArr1] === arr2[readArr2]){
        result = true
      } else {
        result = false
      }
    });
  });
  return result
} 
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)
