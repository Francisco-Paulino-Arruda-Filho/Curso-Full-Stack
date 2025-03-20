"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceShoppingCart = void 0;
var DiscountStrategy_1 = require("./DiscountStrategy");
var ECommerceShoppingCart = /** @class */ (function () {
    function ECommerceShoppingCart() {
        this.products = [];
        this._discountStrategy = new DiscountStrategy_1.DiscountStrategy();
    }
    ECommerceShoppingCart.prototype.addProduct = function () {
        var _this = this;
        var products = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            products[_i] = arguments[_i];
        }
        products.forEach(function (product) { return _this.products.push(product); });
    };
    ECommerceShoppingCart.prototype.getProducts = function () {
        return this.products;
    };
    ECommerceShoppingCart.prototype.getTotal = function () {
        return this.products.reduce(function (sum, product) { return sum + product.price; }, 0);
    };
    ECommerceShoppingCart.prototype.getTotalWithDiscount = function () {
        return this._discountStrategy.getDiscount(this);
    };
    Object.defineProperty(ECommerceShoppingCart.prototype, "discount", {
        set: function (discount) {
            this._discountStrategy = discount;
        },
        enumerable: false,
        configurable: true
    });
    return ECommerceShoppingCart;
}());
exports.ECommerceShoppingCart = ECommerceShoppingCart;
