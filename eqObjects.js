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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1) //cria uma array das chaves desse objeto "a:"
  const count1 = keys1.length //conta o numero de chaves do objeto atraves da keys1
  const keys2 = Object.keys(object2)
  const count2 = keys2.length
  let result
  if(count1 !== count2){
    return false 
  }
  else{
    for ( let e of keys1){
      //console.log(object1[e], " vs ", object2[e])
      if (Array.isArray(object1[e])){
        return eqArrays(object1[e],object2[e])
      }
      else {
        if(object1[e] === object2[e] ){ // precisa trocar o === por eqArray
          result = true
        }else{
          return false
        }
      } 
    }
  }
  return result
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
