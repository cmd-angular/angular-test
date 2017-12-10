import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCar = false;
  addCarStatus = '';
  addCarSelect = false;
  inputText = '';
  carName = '';
  cars = ['bmv', 'audi', 'mazda', 'volvo', 'lada', 'opel'];
  dates = [
    new Date(2015, 10, 15).toDateString(),
    new Date(2014, 9, 14).toDateString(),
    new Date(2013, 8, 13).toDateString(),
    new Date(2012, 7, 12).toDateString(),
  ];


  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 400);

  }

  addCar() {
    this.addCarStatus = 'Добавлено через переменную';
    this.addCarSelect = true;
    this.cars.push(this.getRandomInt(1, 100));
  }

  onKeyUp(event) {
    this.inputText = event.target.value;
  }

  setClass(car) {
    return car.length > 4 ? true : false;
  }


  getRandomInt(min, max) {

    const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';
    let pass = '';

    for (let x = 0; x < length; x++) {
      let i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }
    return pass;

    // return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
