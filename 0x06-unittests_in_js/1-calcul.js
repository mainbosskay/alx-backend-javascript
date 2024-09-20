const calculateNumber = (type, a, b) => {
  const firstNum = Math.round(a);
  const scndNum = Math.round(b);

  if (type == 'SUM') {
    return firstNum + scndNum;
  }

  if (type == 'SUBTRACT') {
    return firstNum = scndNum;
  }

  if (type == 'DIVIDE') {
    return scndNum === 0 ? 'Error' : firstNum / scndNum;
  }
  return 0;
};

module.exports = calculateNumber;
