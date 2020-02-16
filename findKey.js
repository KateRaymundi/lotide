const assertArrayEqual = require("./assertArrayEqual")

const findKey = function (hotel, callback){
  for (let key in hotel){
    if(callback(hotel[key])){
      return key
    } 
  }
  return undefined
}
console.log(findKey({
  "Blue Hill": { stars: 1 }, // o nome do hotel eh uma chave e nao um valor 
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))




















