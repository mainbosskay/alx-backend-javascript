const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('sums two integers', () => {
    assert.strictEqual(calculateNumber(2, 4), 6);
  });

  it('sums one float and integer as integers', () => {
    assert.strictEqual(calculateNumber(2, 3.0), 5);
  });

  it('sums two floats as integers', () => {
    assert.strictEqual(calculateNumber(7.0, 9.0), 16);
  });

  it('round down b and sum as integer', () => {
    assert.strictEqual(calculateNumber(4.0, 6.4), 10);
  });

  it('sums float b (round down) and integer as integer', () => {
    assert.strictEqual(calculateNumber(5, 5.2), 10);
  });

  it('round down a and sum as integer', () => {
    assert.strictEqual(calculateNumber(9.2, 4.0), 13);
  });

  it('sums float a (round down) and integer as integer', () => {
    assert.strictEqual(calculateNumber(8.1, 4), 12);
  });

  it('sum two floats (round down) as integer', () => {
    assert.strictEqual(calculateNumber(7.2, 8.2), 15);
  });

  it('round up b and sum as integer', () => {
    assert.strictEqual(calculateNumber(5.0, 7.5), 13);
  });

  it('sums float b (round up) and integer as integer', () => {
    assert.strictEqual(calculateNumber(5, 4.9), 10);
  });

  it('round up a and sum as integer', () => {
    assert.strictEqual(calculateNumber(6.8, 1.0), 8);
  });

  it('sums float a (round up) and integer as integer', () => {
    assert.strictEqual(calculateNumber(7.9, 8), 16);
  });

  it('sum two floats (round up) as integer', () => {
    assert.strictEqual(calculateNumber(7.8, 8.7), 17);
  });

  it('round trailing 9s and sums as integer', () => {
    assert.strictEqual(calculateNumber(4.499999, 5.499999), 9);
  });
});
