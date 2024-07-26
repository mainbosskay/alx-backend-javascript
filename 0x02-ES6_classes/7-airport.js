class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getting and setting nameof Airport
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Getting and setting code of the Airport
  get code() {
    return this._coode;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getting default str description for Airport and return code
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
export default Airport;
