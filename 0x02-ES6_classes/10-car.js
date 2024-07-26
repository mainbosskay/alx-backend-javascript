class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getting and setting the brand of the Car
  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  // Getting and setting the motor of the Car
  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  // Getting and setting the color of the Car
  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  // Function that creates and returns a new Car object
  cloneCar() {
    const NewObj = this.constructor || [Symbol.species];
    return new NewObj();
  }
}
export default Car;
