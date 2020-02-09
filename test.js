const numbers = [1, 2, 3, 4, 5];
const names = ['Anna', 'Max', 'Peter', 'Mary'];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    console.log("callback", callback)
  }
  return results;
};
const squareNumbers = function(number) {
  return number ** 2;
};
const greetPerson = function(name) {
  return `Hello ${name}!`;
};
// console.log(map(numbers, squareNumbers));
// console.log(map(names, greetPerson));
console.log(map(numbers, greetPerson));
