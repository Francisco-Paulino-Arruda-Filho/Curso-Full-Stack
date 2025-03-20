"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountStrategy = void 0;
var DiscountStrategy = /** @class */ (function () {
    function DiscountStrategy() {
        this.discount = 0;
    }
    DiscountStrategy.prototype.getDiscount = function (cart) {
        return cart.getTotal();
    };
    return DiscountStrategy;
}());
exports.DiscountStrategy = DiscountStrategy;
