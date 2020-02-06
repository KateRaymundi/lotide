const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  }   else {
    console.log(`\u{274C} \u{274C} \u{274C} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence){
  sumOfLetters = {}
  for (letter of sentence){
    console.log("letter", letter)
    console.log("sumOfLetters", sumOfLetters)
    console.log("sumOfLetters[letter]", sumOfLetters[letter])
    console.log("**************************")
    
    if(letter !== " "){
      if (sumOfLetters[letter] ){
        sumOfLetters[letter] += 1
        }else {
          sumOfLetters[letter] = 1
          //console.log(result)
        }
    }
    }
    
    //console.log(str)
    return sumOfLetters
  }
 
console.log(countLetters("Lighthouse Lab"))
console.log(assertEqual(countLetters("Lighthouse Lab")))