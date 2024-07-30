function hasValuesFromArray(set, array) {
  return array.every((booleanValue) => set.has(booleanValue));
}
export default hasValuesFromArray;
