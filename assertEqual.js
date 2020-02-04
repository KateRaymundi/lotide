const assertEqual = function(actual, expected) {
if (actual === expected){
} else {
  console.log( "AssertionError [ERR_ASSERTION]: false == true")
}

 
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); 