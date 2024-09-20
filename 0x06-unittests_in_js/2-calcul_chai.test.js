const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('sum two positive integers', () => {
      expect(calculateNumber('SUM', 2, 4)).to.equal(6);
    });

    it('sum two negative integers', () => {
      expect(calculateNumber('SUM', -6, -10)).to.equal(-16);
    });

    it('sum a(negative int) and b(positive int)', () => {
      expect(calculateNumber('SUM', -5, 5)).to.equal(0);
    });

    it('sum a(positive int) and b(negative int)', () => {
      expect(calculateNumber('SUM', 7, -7)).to.equal(0);
    });

    it('sum a(postive int) and b(positive float)', () => {
      expect(calculateNumber('SUM', 4, 2.0)).to.equal(6);
    });

    it('sum a(positive float) and b(positive int)', () => {
      expect(calculateNumber('SUM', 4.0, 6)).to.equal(10);
    });

    it('sum a(negative int) and b(postive float)', () => {
      expect(calculateNumber('SUM', -8, 8.0)).to.equal(0);
    });

    it('sum a(positve float) and b(negative int)', () => {
      expect(calculateNumber('SUM', 6.0, -6)).to.equal(0);
    });

    it('sum a(positive int) and b(negative float)', () => {
      expect(calculateNumber('SUM', 6, -6.0)).to.equal(0);
    });

    it('sum a(negative float) and b(postive int)', () => {
      expect(calculateNumber('SUM', -5.0, 5)).to.equal(0);
    });

    it('sum two positive float numbers', () => {
      expect(calculateNumber('SUM', 3.0, 5.0)).to.equal(8);
    });

    it('sum two negative float numbers', () => {
      expect(calculateNumber('SUM', -4.0, -8.0)).to.equal(-12);
    });

    it('sum two positive float numbers (alternate)', () => {
      expect(calculateNumber('SUM', 5.2, 2.8)).to.equal(8);
    });

    it('sum two negative float numbers (alternate)', () => {
      expect(calculateNumber('SUM', -2.8, -5.2)).to.equal(-8);
    });

    it('sum a(negative float) and b(positive float)', () => {
      expect(calculateNumber('SUM', -6.0, 6.0)).to.equal(0);
    });

    it('sum a(positive float) and b(negative float)', () => {
      expect(calculateNumber('SUM', 7.0, -7.0)).to.equal(0);
    });

    it('sum 0 and 0', () => {
      expect(calculateNumber('SUM', 0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('subtract two positive integers', () => {
      expect(calculateNumber('SUBTRACT', 1, 7)).to.equal(-6);
    });

    it('subtract two negative integers', () => {
      expect(calculateNumber('SUBTRACT', -5, -7)).to.equal(2);
    });

    it('subtract a(negative int) and b(positive int)', () => {
      expect(calculateNumber('SUBTRACT', -8, 8)).to.equal(-16);
    });

    it('subtract a(positive int) and b(negative int)', () => {
      expect(calculateNumber('SUBTRACT', 9, -9)).to.equal(18);
    });

    it('subtract a(postive int) and b(positive float)', () => {
      expect(calculateNumber('SUBTRACT', 2, 1.0)).to.equal(1);
    });

    it('subtract a(positive float) and b(positive int)', () => {
      expect(calculateNumber('SUBTRACT', 3.0, 8)).to.equal(-5);
    });

    it('subtract a(negative int) and b(postive float)', () => {
      expect(calculateNumber('SUBTRACT', -3, 3.0)).to.equal(-6);
    });

    it('subtract a(positve float) and b(negative int)', () => {
      expect(calculateNumber('SUBTRACT', 4.0, -4)).to.equal(8);
    });

    it('subtract a(positive int) and b(negative float)', () => {
      expect(calculateNumber('SUBTRACT', 7, -7.0)).to.equal(14);
    });

    it('subtract a(negative float) and b(postive int)', () => {
      expect(calculateNumber('SUBTRACT', -6.0, 6)).to.equal(-12);
    });

    it('subtract two positive float numbers', () => {
      expect(calculateNumber('SUBTRACT', 6.0, 7.0)).to.equal(-1);
    });

    it('subtract two negative float numbers', () => {
      expect(calculateNumber('SUBTRACT', -3.0, -7.0)).to.equal(4);
    });

    it('subtract two positive float numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', 3.4, 2.9)).to.equal(0);
    });

    it('subtract two negative float numbers (alternate)', () => {
      expect(calculateNumber('SUBTRACT', -2.7, -3.3)).to.equal(0);
    });

    it('subtract a(negative float) and b(positive float)', () => {
      expect(calculateNumber('SUBTRACT', -7.0, 7.0)).to.equal(-14);
    });

    it('subtract a(positive float) and b(negative float)', () => {
      expect(calculateNumber('SUBTRACT', 6.0, -6.0)).to.equal(12);
    });

    it('subtract 0 and 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('divide two positive integers', () => {
      expect(calculateNumber('DIVIDE', 12, 2)).to.equal(6);
    });

    it('divide two negative integers', () => {
      expect(calculateNumber('DIVIDE', 9, 2)).to.equal(4.5);
    });

    it('divide a(negative int) and b(positive int)', () => {
      expect(calculateNumber('DIVIDE', -12, 6)).to.equal(-2);
    });

    it('divide a(positive int) and b(negative int)', () => {
      expect(calculateNumber('DIVIDE', 14, -7)).to.equal(-2);
    });

    it('divide a(postive int) and b(positive float)', () => {
      expect(calculateNumber('DIVIDE', 4, 2.0)).to.equal(2);
    });

    it('divide a(positive float) and b(positive int)', () => {
      expect(calculateNumber('DIVIDE', 21.0, 7)).to.equal(3);
    });

    it('divide a(negative int) and b(postive float)', () => {
      expect(calculateNumber('DIVIDE', -5, 5.0)).to.equal(-1);
    });

    it('divide a(positve float) and b(negative int)', () => {
      expect(calculateNumber('DIVIDE', 6.0, -6)).to.equal(-1);
    });

    it('divide a(positive int) and b(negative float)', () => {
      expect(calculateNumber('DIVIDE', 4, -4.0)).to.equal(-1);
    });

    it('divide a(negative float) and b(postive int)', () => {
      expect(calculateNumber('DIVIDE', -8.0, 8)).to.equal(-1);
    });

    it('divide two positive float numbers', () => {
      expect(calculateNumber('DIVIDE', 15.0, 5.0)).to.equal(3);
    });

    it('divide two negative float numbers', () => {
      expect(calculateNumber('DIVIDE', -6.0, -2.0)).to.equal(3);
    });

    it('divide two positive float numbers (alternate)', () => {
      expect(calculateNumber('DIVIDE', 3.4, 2.8)).to.equal(1);
    });

    it('divide two negative float numbers (alternate)', () => {
      expect(calculateNumber('DIVIDE', -11.8, -2.4)).to.equal(6);
    });

    it('divide a(negative float) and b(positive float)', () => {
      expect(calculateNumber('DIVIDE', -9.0, 9.0)).to.equal(-1);
    });

    it('divide a(positive float) and b(negative float)', () => {
      expect(calculateNumber('DIVIDE', 7.0, -7.0)).to.equal(-1);
    });

    it('divide 0 and postive integer', () => {
      expect(calculateNumber('DIVIDE', 0, 3)).to.equal(0);
    });

    it('divide 0 and negative integer', () => {
      expect(calculateNumber('DIVIDE', 0, -6)).to.equal(-0);
    });

    it('divide 0.0 and postive float', () => {
      expect(calculateNumber('DIVIDE', 0.0, 7.0)).to.equal(0);
    });

    it('divide 0.0 and negative float', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('divide positive intger and 0', () => {
      expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
    });

    it('divide positive float and 0', () => {
      expect(calculateNumber('DIVIDE', 9.0, 0)).to.equal('Error');
    });

    it('divide positive float and rounded to 0 (alternate)', () => {
      expect(calculateNumber('DIVIDE', 6.0, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 6.0, -0.4)).to.equal('Error');
    });

    it('divide negative intger and 0', () => {
      expect(calculateNumber('DIVIDE', -7, 0)).to.equal('Error');
    });

    it('divide negative float and 0', () => {
      expect(calculateNumber('DIVIDE', -9.0, 0)).to.equal('Error');
    });

    it('divide negative float and rounded to 0 (alternate)', () => {
      expect(calculateNumber('DIVIDE', -6.0, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -6.0, -0.4)).to.equal('Error');
    });

    it('divide 0 and 0', () => {
      expect(calculateNumber('DIVIDE', 0, 0.0)).to.equal('Error');
    });
  });
});
