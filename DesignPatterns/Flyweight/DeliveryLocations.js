"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryLocation = void 0;
var DeliveryLocation = /** @class */ (function () {
    function DeliveryLocation(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }
    DeliveryLocation.prototype.deliver = function (name, number) {
        console.log('Entrega para %s', name);
        console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
        console.log('Número:', number);
        console.log('###');
    };
    return DeliveryLocation;
}());
exports.DeliveryLocation = DeliveryLocation;
// Compare this snippet from DesignPatterns/Flyweight/ConcreteDeliveryFlyweight.ts:
