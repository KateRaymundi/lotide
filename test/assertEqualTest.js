const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {

  it("should Assertion Passed when actual is equal expected", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"))
  });

  it("should Assertion Failed when actual is !equal expected", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse"))
  });

});




