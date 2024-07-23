export default function appendToEachArrayValue(array, appendString) {
  const retnArr = [];
  for (const value of array) {
    retnArr.push(appendString + value);
  }

  return retnArr;
}
