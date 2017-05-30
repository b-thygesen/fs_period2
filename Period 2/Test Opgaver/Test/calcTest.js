var assert = require('assert');
var calc = require('../Methods/Calc')

describe('Add function', function() {
    it('should return 7', function() {
      assert.equal(calc.add(5, 2), 7);
    });
  });

  describe('Subtract function', function() {
    it('should return 3', function() {
      assert.equal(calc.subtract(5, 2), 3);
    });
  });

  describe('Times function', function() {
    it('should return 10', function() {
      assert.equal(calc.times(5, 2), 10);
    });
  });

  describe('Divide function', function() {
    it('should return 5', function() {
      assert.equal(calc.divide(5, 1), 5);
    });
  });