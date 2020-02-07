// TESTE ASSERTION FUNCTION
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

//ACTUAL FUNCTION 
const middle = function (mid){
  let center = mid.length / 2
  if(mid.length % 2 !== 0){
    return [mid[Math.floor(center)]]
  } else {
    return [mid[center - 1], mid[center]]
  
  }
  
}
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


  
  
//(middle([1, 2, 3, 4, 5]))

//console.log(middle([1, 2, 3, 4, 5,6]))