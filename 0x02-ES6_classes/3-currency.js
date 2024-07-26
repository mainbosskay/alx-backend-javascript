class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Gets and sets code of the currency
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Gets and setsname of the currency
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
export default Currency;
