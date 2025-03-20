import { Buyer } from "./Buyer";
import { Mediator } from "./Mediator";
import { Seller } from "./Seller";

const mediator = new Mediator();

const seller1 = new Seller(
  [
    { id: "1", name: "Product 1", price: 100 },
    { id: "3", name: "Product 3", price: 300 },
    { id: "5", name: "Product 5", price: 500 },
  ],
  mediator
);
seller1.addProduct({ id: "7", name: "Product 7", price: 700 });

seller1.showProducts();

const seller2 = new Seller(
  [
    { id: "2", name: "Product 2", price: 200 },
    { id: "4", name: "Product 4", price: 400 },
    { id: "6", name: "Product 6", price: 600 },
  ],
  mediator
);
seller2.addProduct({ id: "8", name: "Product 8", price: 800 });

seller2.showProducts();

mediator.addSeller(seller1);
mediator.addSeller(seller2);

// Simulando uma compra
mediator.buyProduct("1");

seller1.showProducts();
seller2.showProducts();

const buyer = new Buyer(mediator);
