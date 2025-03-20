"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBudgetCustomer = void 0;
var BaseBudgetCustomer = /** @class */ (function () {
    function BaseBudgetCustomer() {
    }
    BaseBudgetCustomer.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
        return nextHandler;
    };
    BaseBudgetCustomer.prototype.handle = function (budget) {
        if (this.nextHandler) {
            return this.nextHandler.handle(budget);
        }
        return budget;
    };
    return BaseBudgetCustomer;
}());
exports.BaseBudgetCustomer = BaseBudgetCustomer;
