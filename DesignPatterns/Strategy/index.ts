import { ECommerceShoppingCart } from "./ECommerceShoppingCart";


const shoppingCart = new ECommerceShoppingCart();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
shoppingCart.addProduct({ name: 'Produto 3', price: 50 });
shoppingCart.addProduct({ name: 'Produto 4', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
shoppingCart.addProduct({ name: 'Produto 5', price: 50 });
shoppingCart.addProduct({ name: 'Produto 6', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
shoppingCart.addProduct({ name: 'Produto 7', price: 50 });
shoppingCart.addProduct({ name: 'Produto 8', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
shoppingCart.addProduct({ name: 'Produto 9', price: 50 });
shoppingCart.addProduct({ name: 'Produto 10', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
