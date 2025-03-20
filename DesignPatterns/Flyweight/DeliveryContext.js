"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryContext = void 0;
var deliveryContext = function (factory, name, number, street, city) {
    var location = factory.makeLocation({ street: street, city: city });
    location.deliver(name, number);
};
exports.deliveryContext = deliveryContext;
