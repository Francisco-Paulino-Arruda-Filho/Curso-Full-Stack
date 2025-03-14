"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NoDiscount = exports.TenPercentDiscount = exports.FiftyPercentDiscount = exports.Discount = void 0;
var Discount = /** @class */ (function () {
    function Discount() {
        this.discount = 0;
    }
    return Discount;
}());
exports.Discount = Discount;
var FiftyPercentDiscount = /** @class */ (function (_super) {
    __extends(FiftyPercentDiscount, _super);
    function FiftyPercentDiscount() {
        var _this = _super.call(this) || this;
        _this.discount = 0.5;
        return _this;
    }
    FiftyPercentDiscount.prototype.calculate = function (price) {
        return price - price * this.discount;
    };
    return FiftyPercentDiscount;
}(Discount));
exports.FiftyPercentDiscount = FiftyPercentDiscount;
var TenPercentDiscount = /** @class */ (function (_super) {
    __extends(TenPercentDiscount, _super);
    function TenPercentDiscount() {
        var _this = _super.call(this) || this;
        _this.discount = 0.1;
        return _this;
    }
    TenPercentDiscount.prototype.calculate = function (price) {
        return price - price * this.discount;
    };
    return TenPercentDiscount;
}(Discount));
exports.TenPercentDiscount = TenPercentDiscount;
var NoDiscount = /** @class */ (function (_super) {
    __extends(NoDiscount, _super);
    function NoDiscount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoDiscount.prototype.calculate = function (price) {
        return price;
    };
    return NoDiscount;
}(Discount));
exports.NoDiscount = NoDiscount;
