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
exports.ProductComposite = exports.ProductLeaf = void 0;
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.add = function (product) { };
    ProductComponent.prototype.remove = function (product) { };
    return ProductComponent;
}());
var ProductLeaf = /** @class */ (function (_super) {
    __extends(ProductLeaf, _super);
    function ProductLeaf(name, price) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.price = price;
        return _this;
    }
    ProductLeaf.prototype.getProductPrice = function () {
        return this.price;
    };
    return ProductLeaf;
}(ProductComponent));
exports.ProductLeaf = ProductLeaf;
var ProductComposite = /** @class */ (function (_super) {
    __extends(ProductComposite, _super);
    function ProductComposite() {
        var _this = _super.call(this) || this;
        _this.products = [];
        return _this;
    }
    ProductComposite.prototype.getProductPrice = function () {
        return this.products.reduce(function (acc, product) { return acc + product.getProductPrice(); }, 0);
    };
    ProductComposite.prototype.add = function (product) {
        this.products.push(product);
    };
    ProductComposite.prototype.remove = function (product) {
        this.products = this.products.filter(function (p) { return p !== product; });
    };
    return ProductComposite;
}(ProductComponent));
exports.ProductComposite = ProductComposite;
var tShirt = new ProductLeaf('t-shirt', 20);
var pen = new ProductLeaf('pen', 10);
var productBox = new ProductComposite();
var smartphone = new ProductLeaf('smartphone', 400);
productBox.add(tShirt);
productBox.add(pen);
productBox.add(smartphone);
console.log(productBox);
