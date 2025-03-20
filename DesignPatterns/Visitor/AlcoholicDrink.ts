import { TaxVisitorProtocol } from "./TaxVisitorProtocol";
import { VisitableProduct } from "./VisitableProducts";

export class AlcoholicDrink extends VisitableProduct {
  constructor(price: number) {
    super('alcoholic drinks', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
      return visitor.visitCigarette(this.getPrice());
  }
}
