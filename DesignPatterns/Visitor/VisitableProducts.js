"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitableProduct = void 0;
var VisitableProduct = /** @class */ (function () {
    function VisitableProduct(name, price) {
        this.name = name;
        this.price = price;
    }
    VisitableProduct.prototype.getName = function () {
        return this.name;
    };
    VisitableProduct.prototype.getPrice = function () {
        return this.price;
    };
    return VisitableProduct;
}());
exports.VisitableProduct = VisitableProduct;
