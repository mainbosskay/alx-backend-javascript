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
      expect(body).to.contain('Welcome to the payment system');
    });     
  });

  it('get correct content type', () => {
    request.get(`${urlAPI}/`, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });     
  });

  it('get correct status code for valid id', () => {
    request.get(`${urlAPI}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('get correct result with valid id', () => {
    request.get(`${urlAPI}/cart/12`, (_err, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
    });
  });

  it('get correct status code with invalid id', () => {
    request.get(`${urlAPI}/cart/a12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
    });
  });

  it('get correct result with invalid id', () => {
    request.get(`${urlAPI}/cart/a12`, (_err, res, body) => {
      expect(body).to.contain('Cannot GET /cart/a12');
    });
  });

  it('get correct content type for valid id', () => {
    request.get(`${urlAPI}/cart/12`, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });
  });
});
