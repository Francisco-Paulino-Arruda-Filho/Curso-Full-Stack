"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EuaTaxVisitor = void 0;
var EuaTaxVisitor = /** @class */ (function () {
    function EuaTaxVisitor() {
    }
    EuaTaxVisitor.prototype.visitAlcoholicDrinks = function (price) {
        return price * 1.3;
    };
    EuaTaxVisitor.prototype.visitFood = function (price) {
        return price * 1.1;
    };
    EuaTaxVisitor.prototype.visitCigarette = function (price) {
        return price * 1.5;
    };
    return EuaTaxVisitor;
}());
exports.EuaTaxVisitor = EuaTaxVisitor;
