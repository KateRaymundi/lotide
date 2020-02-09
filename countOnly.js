const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{2705} \u{2705} \u{2705} Assertion Passed: ${actual} === ${expected}`);
  }   else {
    console.log(`\u{274C} \u{274C} \u{274C} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  console.log(itemsToCount)

  for (const item of allItems){
    console.log(item)
    if (itemsToCount[item]){
    
      if(results[item]){
        results[item] += 1
      } else {
        results[item] = 1
      }
    } 
  }
  return results
}
//const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true,}))
//console.log(assertEqual(firstNames, { "Jason": true, "Karima": true, "Fang": true,}))