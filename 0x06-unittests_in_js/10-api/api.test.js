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

  it('post correct status code for valid login', () => {
    request.post(`${urlAPI}/login`, {json: {userName: 'Kenny'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('post correct response with valid login', () => {
    request.post(`${urlAPI}/login`, {json: {userName: 'Kenny'}}, (_err, res, body) => {
      expect(body).to.contain('Welcome Taiwo');
    });
  });

  it('post correct content type for valid login', () => {
    request.post(`${urlAPI}/login`, {json: {userName: 'Kenny'}}, (_err, res, body) => {
      expect(res.headers['content-type']).to.be.equal('text/html; charset=utf-8');
    });
  });

  it('get correct status code for valid available payments', () => {
    request.get(`${urlAPI}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('get correct response for valid available payments', () => {
    request.get(`${urlAPI}/available_payments`, (_err, res, body) => {
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
    });
  });

  it('get correct content type for valid available payments', () => {
    request.get(`${urlAPI}/available_payments`, (_err, res, body) => {
      expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });
});
