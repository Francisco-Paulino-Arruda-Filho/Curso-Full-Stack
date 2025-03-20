"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SmartHouseLight_1 = require("./SmartHouseLight");
var bedroomLight = new SmartHouseLight_1.SmartHouseLight('Bedroom');
bedroomLight.turnOn();
bedroomLight.increaseIntensity();
bedroomLight.decreaseIntensity();
bedroomLight.turnOff();
console.log("Bedroom light power: ".concat(bedroomLight.getPower()));
