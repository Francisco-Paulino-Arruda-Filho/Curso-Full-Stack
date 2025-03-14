"use strict";
exports.__esModule = true;
exports.Order = void 0;
var Order = /** @class */ (function () {
    function Order(shoppingCart, messaging, persistency, custumer) {
        this.status = 'open';
        this.shoppingCart = shoppingCart;
        this.messaging = messaging;
        this.persistency = persistency;
        this.custumer = custumer;
    }
    Order.prototype.checkout = function () {
        if (this.shoppingCart.isEmpty()) {
            console.log('Your shopping cart is empty');
            return;
        }
        this.persistency.saveOrder();
        this.messaging.sendMessage;
        this.status = 'finalized';
        this.shoppingCart.clearCart();
    };
    return Order;
}());
exports.Order = Order;
