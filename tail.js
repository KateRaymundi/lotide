const assertEqual = require ("./assertEqual");
let tail = function(arr) {
  let arrCopy = [...arr];
  arrCopy.splice(0, 1); // splice runs (no need to create variable)
  return arrCopy;
};


module.exports = tail;
