"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrazilTaxVisitor = void 0;
var BrazilTaxVisitor = /** @class */ (function () {
    function BrazilTaxVisitor() {
    }
    BrazilTaxVisitor.prototype.visitAlcoholicDrinks = function (price) {
        return price * 1.1;
    };
    BrazilTaxVisitor.prototype.visitFood = function (price) {
        return price * 1.05;
    };
    BrazilTaxVisitor.prototype.visitCigarette = function (price) {
        return price * 1.3;
    };
    return BrazilTaxVisitor;
}());
exports.BrazilTaxVisitor = BrazilTaxVisitor;
