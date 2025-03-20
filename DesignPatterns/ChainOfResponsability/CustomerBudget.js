"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerBudget = void 0;
var CustomerBudget = /** @class */ (function () {
    function CustomerBudget(value) {
        this.value = value;
        this.approved = false;
    }
    CustomerBudget.prototype.getValue = function () {
        return this.value;
    };
    CustomerBudget.prototype.approve = function () {
        this.approved = true;
    };
    return CustomerBudget;
}());
exports.CustomerBudget = CustomerBudget;
