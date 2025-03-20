"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
var Seller = /** @class */ (function () {
    function Seller(products, mediator) {
        this.products = [];
        this.products = products;
        this.mediator = mediator;
    }
    Seller.prototype.showProducts = function () {
        this.products.forEach(function (product) {
            console.log(product.id, product.name, product.price);
        });
    };
    Seller.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    Seller.prototype.getMediator = function () {
        return this.mediator;
    };
    Seller.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Seller.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.id !== productId; });
    };
    Seller.prototype.sellProduct = function (productId) {
        var product = this.products.find(function (product) { return product.id === productId; });
        if (product) {
            console.log('Product sold:', product.name);
            this.removeProduct(productId);
        }
    };
    return Seller;
}());
exports.Seller = Seller;
