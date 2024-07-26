class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Getting and setting size of HolbertonClass
  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  // getting and Setting location of HolbertonClass
  get location() {
    return this._location;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  // Method that manages the object's conversion according to the specified hint type
  [Symbol.toPrimitive](hintType) {
    switch (hintType) {
      case 'number':
        return this.size;
      case 'string':
        return this.location;
      default:
        return this;
    }
  }
}
export default HolbertonClass;
