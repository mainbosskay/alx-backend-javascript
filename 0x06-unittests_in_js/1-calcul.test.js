const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('sum two positive integers', () => {
      assert.strictEqual(calculateNumber('SUM', 2, 4), 6);
    });

    it('sum two negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', -6, -8), -14);
    });

    it('sum a(negative int) and b(positive int)', () => {
      assert.strictEqual(calculateNumber('SUM', -7, 7), 0);
    });

    it('sum a(positive int) and b(negative int)', () => {
      assert.strictEqual(calculateNumber('SUM', 7, -7), 0);
    });

    it('sum a(postive int) and b(positive float)', () => {
      assert.strictEqual(calculateNumber('SUM', 3, 2.0), 5);
    });

    it('sum a(positive float) and b(positive int)', () => {
      assert.strictEqual(calculateNumber('SUM', 3.0, 7), 10);
    });

    it('sum a(negative int) and b(postive float)', () => {
      assert.strictEqual(calculateNumber('SUM', -5, 5.0), 0);
    });

    it('sum a(positve float) and b(negative int)', () => {
      assert.strictEqual(calculateNumber('SUM', 7.0, -7), 0);
    });

    it('sum a(positive int) and b(negative float)', () => {
      assert.strictEqual(calculateNumber('SUM', 7, -7.0), 0);
    });

    it('sum a(negative float) and b(postive int)', () => {
      assert.strictEqual(calculateNumber('SUM', -4.0, 4), 0);
    });

    it('sum two positive float numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 6.0, 2.0), 8);
    });

    it('sum two negative float numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -9.0, -8.0), -17);
    });

    it('sum two positive float numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 3.6), 6);
    });

    it('sum two negative float numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUM', -1.6, -2.5), -4);
    });

    it('sum a(negative float) and b(positive float)', () => {
      assert.strictEqual(calculateNumber('SUM', -7.0, 7.0), 0);
    });

    it('sum a(positive float) and b(negative float)', () => {
      assert.strictEqual(calculateNumber('SUM', 6.0, -6.0), 0);
    });

    it('sum 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0.0), 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('subtract two positive integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 8), -7);
    });

    it('subtract two negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -5, -6), 1);
    });

    it('subtract a(negative int) and b(positive int)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -7, 7), -14);
    });

    it('subtract a(positive int) and b(negative int)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9, -9), 18);
    });

    it('subtract a(postive int) and b(positive float)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 1.0), 1);
    });

    it('subtract a(positive float) and b(positive int)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 8), -5);
    });

    it('subtract a(negative int) and b(postive float)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -3, 3.0), -6);
    });

    it('subtract a(positve float) and b(negative int)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.0, -4), 8);
    });

    it('subtract a(positive int) and b(negative float)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, -5.0), 10);
    });

    it('subtract a(negative float) and b(postive int)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -7.0, 7), -14);
    });

    it('subtract two positive float numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.0, 4.0), -1);
    });

    it('subtract two negative float numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -6.0, -9.0), 3);
    });

    it('subtract two positive float numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('subtract two negative float numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.8, -2.4), 0);
    });

    it('subtract a(negative float) and b(positive float)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -8.0, 8.0), -16);
    });

    it('subtract a(positive float) and b(negative float)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.0, -9.0), 18);
    });

    it('subtract 0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0.0), 0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('divide two positive integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
    });

    it('divide two negative integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7, 2), 3.5);
    });

    it('divide a(negative int) and b(positive int)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -16, 8), -2);
    });

    it('divide a(positive int) and b(negative int)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 18, -9), -2);
    });

    it('divide a(postive int) and b(positive float)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 1.0), 2);
    });

    it('divide a(positive float) and b(positive int)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 24.0, 8), 3);
    });

    it('divide a(negative int) and b(postive float)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -3, 3.0), -1);
    });

    it('divide a(positve float) and b(negative int)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.0, -4), -1);
    });

    it('divide a(positive int) and b(negative float)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, -5.0), -1);
    });

    it('divide a(negative float) and b(postive int)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 7), -1);
    });

    it('divide two positive float numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 12.0, 4.0), 3);
    });

    it('divide two negative float numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -9.0, -3.0), 3);
    });

    it('divide two positive float numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.2, 2.9), 1);
    });

    it('divide two negative float numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -13.8, -2.4), 7);
    });

    it('divide a(negative float) and b(positive float)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 7.0), -1);
    });

    it('divide a(positive float) and b(negative float)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, -8.0), -1);
    });

    it('divide 0 and postive integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 6), 0);
    });

    it('divide 0 and negative integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, -8), -0);
    });

    it('divide 0.0 and postive float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 8.0), 0);
    });

    it('divide 0.0 and negative float', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -6.0), -0);
    });

    it('divide positive intger and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
    });

    it('divide positive float and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 0), 'Error');
    });

    it('divide positive float and rounded to 0 (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 6.0, -0.2), 'Error');
    });

    it('divide negative intger and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, 0), 'Error');
    });

    it('divide negative float and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -8.0, 0), 'Error');
    });

    it('divide negative float and rounded to 0 (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.0, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -6.0, -0.2), 'Error');
    });

    it('divide 0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0.0), 'Error');
    });
  });
});
