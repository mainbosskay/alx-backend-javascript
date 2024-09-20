const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('output where success == true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });

  it('output where success == false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch((err) => done(err));
  });
});
