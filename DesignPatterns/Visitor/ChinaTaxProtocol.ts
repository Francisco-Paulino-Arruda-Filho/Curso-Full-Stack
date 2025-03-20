import { TaxVisitorProtocol } from "./TaxVisitorProtocol";

export class ChinaTaxProtocol implements TaxVisitorProtocol {
  visitAlcoholicDrinks(price: number): number {
    return price * 1.2;
  }

  visitFood(price: number): number {
    return price * 1.1;
  }

  visitCigarette(price: number): number {
    return price * 1.4;
  }
}
