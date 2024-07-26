import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getting and setting range of EVCar
  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  // Function that returns a Car instance instead of an EVCar instance for privacy reasons
  cloneCar() {
    const NewObj = super.constructor || super[Symbol.species];
    return new NewObj();
  }
}
export default EVCar;
