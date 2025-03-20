"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHouseLight = void 0;
var SmartHouseLight = /** @class */ (function () {
    function SmartHouseLight(name) {
        this.isOn = false;
        this.intensity = 50;
        console.log("Light ".concat(name, " created"));
    }
    SmartHouseLight.prototype.turnOn = function () {
        this.isOn = true;
        console.log("Light is on");
    };
    SmartHouseLight.prototype.turnOff = function () {
        this.isOn = false;
        console.log("Light is off");
    };
    SmartHouseLight.prototype.increaseIntensity = function () {
        if (this.intensity < 100) {
            this.intensity += 10;
            console.log("Light intensity increased to ".concat(this.intensity));
        }
    };
    SmartHouseLight.prototype.getPower = function () {
        if (this.isOn) {
            return 'On';
        }
        return 'Off';
    };
    SmartHouseLight.prototype.decreaseIntensity = function () {
        if (this.intensity > 0) {
            this.intensity -= 10;
            console.log("Light intensity decreased to ".concat(this.intensity));
        }
    };
    return SmartHouseLight;
}());
exports.SmartHouseLight = SmartHouseLight;
