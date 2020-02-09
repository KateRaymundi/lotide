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
        return eqObjects(object1[e],object2[e])
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


const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)){
  console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  }else {
    console.log(`\u{274C} \u{274C} \u{274C} Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
}
  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false