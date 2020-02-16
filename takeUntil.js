const eqArrays = require("./eqArrays")

const assertArrayEqual = require("./assertArrayEqual")

const takeUntil = function(array, callback) {
  let result = []
  for (let e of array) {
    if (callback(e)) {
      return result // parei a funcao para o primeiro numero negativo e a funcao nao le mais
    } else {
      result.push(e)
    }
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => {return x < 0});
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

module.exports = takeUntil;