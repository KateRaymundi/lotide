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

//assertArrayEqual([1, 2], [1, 2, 3])

const without = function(source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++){
    find = source.indexOf(itemsToRemove[i])
    if(find !== -1){
    source.splice(find, 1)
  } 
  return source
}
}
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
console.log(without([2, 1, 3], [1])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArrayEqual(words, ["hello", "world", "lighthouse"])


