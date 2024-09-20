const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let spyUtils;
  let spyConsole;

  beforeEach(() => {
    spyUtils = sinon.spy(Utils, 'calculateNumber');
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('use Utils.calculateNumber with arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyUtils.callCount).to.be.equal(1);
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('use Utils.calculateNumber with negative arguments', () => {
    sendPaymentRequestToApi(-100, 20);
    expect(spyUtils.calledWith('SUM', -100, 20)).to.be.true;
    expect(spyUtils.callCount).to.be.equal(1);
    expect(spyConsole.calledOnceWithExactly('The total is: -80')).to.be.true;
  });

  it('use Utils.calculateNumber with non-number argument', () => {
    sendPaymentRequestToApi(100, 'num');
    expect(spyUtils.calledWith('SUM', 100, sinon.match.any)).to.be.true;
    expect(spyUtils.callCount).to.be.equal(1);
    expect(spyConsole.calledOnceWithExactly('The total is: NaN')).to.be.true;
  });
});
