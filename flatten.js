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

const flatten = function (arr1) {
  let finalArr =[]
for(let element1 of arr1){
  if (Array.isArray(element1)){
    for(element2 of element1){ // element1 pq eu criei ele no loop acima e ele virou uma nova array
      finalArr.push(element2)
    }
  } else {
    finalArr.push(element1)
  }
}
return finalArr
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
//assertArrayEqual([1, 2], [1, 2, 3])