import { TaxVisitorProtocol } from "./TaxVisitorProtocol";
import { VisitableProduct } from "./VisitableProducts";

export class Cigarette extends VisitableProduct {
  constructor(price: number) {
    super('cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.visitCigarette(this.getPrice());
  }
}
