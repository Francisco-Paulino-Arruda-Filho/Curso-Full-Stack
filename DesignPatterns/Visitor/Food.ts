import { TaxVisitorProtocol } from "./TaxVisitorProtocol";
import { VisitableProduct } from "./VisitableProducts";

export class Food extends VisitableProduct {
  constructor(price: number) {
    super('food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.visitFood(this.getPrice());
  }
}
