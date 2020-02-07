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

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)){
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${array1} === ${array2}`);
  }else {
    console.log(`\u{274C} \u{274C} \u{274C} Assertion Failed: ${array1} !== ${array2}`);
}
}

const words = ["ground", "control", "to", "major", "tom"];

const testwords = function(word) {
  console.log(word)
return `Hello  ${word}`
}

const map = function(array, callback) {
  const results = [];
  for (let item of array){
 
 results.push(callback(item))
  
  }
  return results;
}
console.log((map(words, testwords)))





