import { AlcoholicDrink } from "./AlcoholicDrink";
import { BrazilTaxVisitor } from "./BrazilTaxVisitor";
import { Cigarette } from "./Cigarette";
import { EuaTaxVisitor } from "./EuaTaxVisitor";
import { Food } from "./Food";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new EuaTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
const totalWithTaxesUS = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(usTaxVisitor) + sum,
  0,
);
console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUS);
