"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mediator = void 0;
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.sellers = [];
    }
    Mediator.prototype.addSeller = function (seller) {
        this.sellers.push(seller);
    };
    Mediator.prototype.removeSeller = function (seller) {
        this.sellers = this.sellers.filter(function (s) { return s !== seller; });
    };
    Mediator.prototype.buyProduct = function (productId) {
        this.sellers.forEach(function (seller) {
            seller.removeProduct(productId);
        });
    };
    Mediator.prototype.sellProduct = function (productId) {
        this.sellers.forEach(function (seller) {
            seller.sellProduct(productId);
        });
    };
    return Mediator;
}());
exports.Mediator = Mediator;
