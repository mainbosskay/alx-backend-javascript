const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const dueAmount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${dueAmount}`);
};

module.exports = sendPaymentRequestToApi;
