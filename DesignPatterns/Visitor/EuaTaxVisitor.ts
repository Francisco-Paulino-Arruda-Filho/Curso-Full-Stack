import { TaxVisitorProtocol } from "./TaxVisitorProtocol";

export class EuaTaxVisitor implements TaxVisitorProtocol {
  visitAlcoholicDrinks(price: number): number {
    return price * 1.3;
  }

  visitFood(price: number): number {
    return price * 1.1;
  }

  visitCigarette(price: number): number {
    return price * 1.5;
  }
}
