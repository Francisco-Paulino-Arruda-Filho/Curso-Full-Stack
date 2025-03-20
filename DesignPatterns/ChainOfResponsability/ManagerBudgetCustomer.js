"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerBudgetCustomer = void 0;
var BaseBudgetCustomer_1 = require("./BaseBudgetCustomer");
var ManagerBudgetCustomer = /** @class */ (function (_super) {
    __extends(ManagerBudgetCustomer, _super);
    function ManagerBudgetCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagerBudgetCustomer.prototype.handle = function (budget) {
        if (budget.getValue() <= 500) {
            budget.approve();
        }
        return _super.prototype.handle.call(this, budget);
    };
    return ManagerBudgetCustomer;
}(BaseBudgetCustomer_1.BaseBudgetCustomer));
exports.ManagerBudgetCustomer = ManagerBudgetCustomer;
