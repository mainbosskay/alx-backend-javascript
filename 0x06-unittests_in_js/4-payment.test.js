const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let stubUtils;
  let spyConsole;

  beforeEach(() => {
    stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('use Utils.calculateNumber with arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubUtils.callCount).to.be.equal(1);
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });

  it('use Utils.calculateNumber with negative arguments', () => {
    sendPaymentRequestToApi(-100, 20);
    expect(stubUtils.calledWith('SUM', -100, 20)).to.be.true;
    expect(stubUtils.callCount).to.be.equal(1);
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });

  it('use Utils.calculateNumber with non-number argument', () => {
    sendPaymentRequestToApi(100, 'num');
    expect(stubUtils.calledWith('SUM', 100, sinon.match.any)).to.be.true;
    expect(stubUtils.callCount).to.be.equal(1);
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
