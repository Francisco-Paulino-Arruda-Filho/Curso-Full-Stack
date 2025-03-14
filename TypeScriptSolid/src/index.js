"use strict";
exports.__esModule = true;
var ShoppingCart_1 = require("./classes/ShoppingCart");
var Order_1 = require("./Order");
var Messaging_1 = require("./services/Messaging");
var Discount_1 = require("./classes/Discount");
var Persistency_1 = require("./classes/Persistency");
var Discount_2 = require("./classes/Discount");
var Discount_3 = require("./classes/Discount");
var custumer_1 = require("./classes/protocol/custumer");
/*
Interface Segregation Principle
- Os clientes não devem ser forçados a depender de interfaces que não utilizam.
- Uma classe não deve ser forçada a implementar interfaces e métodos que não serão utilizados.
*/
/**
 * Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.
 */
var persistency = new Persistency_1.Persistency();
var shoppingCart = new ShoppingCart_1.ShoppingCart([]);
var messaging = new Messaging_1.Messaging();
var customer = new custumer_1.IndividualCustomer('Luiz', 'Otávio', '111.111.111-11');
var order = new Order_1.Order(shoppingCart, messaging, persistency, customer);
var discount = new Discount_1.FiftyPercentDiscount();
var product1 = { name: 'T-shirt', price: 49.9 };
var product2 = { name: 'Mug', price: 1.9 };
var product3 = { name: 'Pen', price: 0.5 };
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2, product3);
console.log(shoppingCart.total());
console.log(shoppingCart.getProductCount());
shoppingCart.removeProduct(product2);
console.log(shoppingCart.total());
console.log(shoppingCart.getProductCount());
console.log(discount.calculate(shoppingCart.total()));
// Substituição de Liskov
discount = new Discount_3.TenPercentDiscount();
console.log(discount.calculate(shoppingCart.total()));
discount = new Discount_2.NoDiscount();
console.log(discount.calculate(shoppingCart.total()));
order.checkout();
