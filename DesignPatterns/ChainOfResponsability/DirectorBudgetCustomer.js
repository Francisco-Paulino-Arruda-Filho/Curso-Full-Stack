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
exports.DirectorBudgetCustomer = void 0;
var BaseBudgetCustomer_1 = require("./BaseBudgetCustomer");
var DirectorBudgetCustomer = /** @class */ (function (_super) {
    __extends(DirectorBudgetCustomer, _super);
    function DirectorBudgetCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectorBudgetCustomer.prototype.handle = function (budget) {
        console.log('O CEO trata qualquer orçamento');
        budget.approve();
        return budget;
    };
    return DirectorBudgetCustomer;
}(BaseBudgetCustomer_1.BaseBudgetCustomer));
exports.DirectorBudgetCustomer = DirectorBudgetCustomer;
