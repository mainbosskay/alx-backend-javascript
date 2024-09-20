const calculateNumber = (a, b) => {
  const firstNum = Math.round(a);
  const scndNum = Math.round(b);
  const totalInt = firstNum + scndNum;
  return totalInt;
};

module.exports = calculateNumber;
