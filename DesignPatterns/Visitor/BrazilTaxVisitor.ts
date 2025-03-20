import { TaxVisitorProtocol } from "./TaxVisitorProtocol";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  visitAlcoholicDrinks(price: number): number {
    return price * 1.1;
  }

  visitFood(price: number): number {
    return price * 1.05;
  }

  visitCigarette(price: number): number {
    return price * 1.3;
  }
}
