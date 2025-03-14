"use strict";
exports.__esModule = true;
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(products) {
        this.products = [];
        this.status = 'open';
        this.products = products;
    }
    ShoppingCart.prototype.addProduct = function () {
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        for (var _a = 0, products_1 = products; _a < products_1.length; _a++) {
            var product = products_1[_a];
            this.products.push(product);
        }
    };
    ShoppingCart.prototype.getProductCount = function () {
        return this.products.length;
    };
    ShoppingCart.prototype.total = function () {
        return this.products.reduce(function (sum, product) { return sum + product.price; }, 0);
    };
    ShoppingCart.prototype.getProducts = function () {
        return this.products;
    };
    ShoppingCart.prototype.removeProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    };
    ShoppingCart.prototype.getStatus = function () {
        return this.status;
    };
    ShoppingCart.prototype.clearCart = function () {
        this.products.length = 0;
    };
    ShoppingCart.prototype.checkout = function () {
        if (this.isEmpty()) {
            console.log('Your shopping cart is empty');
            return;
        }
        this.clearCart();
    };
    ShoppingCart.prototype.isEmpty = function () {
        return this.products.length === 0;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
