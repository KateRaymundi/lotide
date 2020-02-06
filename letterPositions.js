const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  }   else {
    console.log(`\u{274C} \u{274C} \u{274C} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//
 
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
 

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++){
    if(sentence[i] in results){
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i]  ///object[key] = value
    }
  }
  delete results[" "]
return results
};
console.log(letterPositions("lighthouse in the house"))

console.log(eqArrays(letterPositions("hello").e, [1]));