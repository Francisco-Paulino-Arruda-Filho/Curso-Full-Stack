"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeliveryContext_1 = require("./DeliveryContext");
var DeliveryFactory_1 = require("./DeliveryFactory");
var factory = new DeliveryFactory_1.DeliveryFactory();
(0, DeliveryContext_1.deliveryContext)(factory, 'John Doe', '123-456-7890', '123 Elm St', 'Springfield');
console.log(factory.getLocations());
