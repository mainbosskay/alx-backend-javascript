const request = require('request');
const { expect } = require('chai');

describe('basic API integration test', () => {
  const urlAPI = 'http://localhost:7865';

  it('get correct status code', () => {
    request.get(`${urlAPI}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('get correct result', () => {
    request.get(`${urlAPI}/`, (_err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
    });     
  });

  it('get correct content type', () => {
    request.get(`${urlAPI}/`, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });     
  });
});
