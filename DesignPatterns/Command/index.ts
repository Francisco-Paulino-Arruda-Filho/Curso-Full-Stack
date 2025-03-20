import { SmartHouseLight } from "./SmartHouseLight";

const bedroomLight = new SmartHouseLight('Bedroom');
bedroomLight.turnOn();
bedroomLight.increaseIntensity();
bedroomLight.decreaseIntensity();
bedroomLight.turnOff();
console.log(`Bedroom light power: ${bedroomLight.getPower()}`);
