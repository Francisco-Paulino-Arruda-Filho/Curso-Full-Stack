"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryFactory = void 0;
var DeliveryLocations_1 = require("./DeliveryLocations");
var DeliveryFactory = /** @class */ (function () {
    function DeliveryFactory() {
        this.locations = {};
    }
    DeliveryFactory.prototype.makeLocation = function (intrinsicState) {
        var key = this.createId(intrinsicState);
        if (key in this.locations)
            return this.locations[key];
        this.locations[key] = new DeliveryLocations_1.DeliveryLocation(intrinsicState);
        return this.locations[key];
    };
    DeliveryFactory.prototype.createId = function (data) {
        return Object.keys(data).map(function (key) { return data[key].replace(/\s+/g, ''); }).join('');
    };
    DeliveryFactory.prototype.getLocations = function () {
        return this.locations;
    };
    return DeliveryFactory;
}());
exports.DeliveryFactory = DeliveryFactory;
