function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const ArrayDataView = new DataView(new ArrayBuffer(length), 0, length);
  ArrayDataView.setInt8(position, value);
  return ArrayDataView;
}
export default createInt8TypedArray;
