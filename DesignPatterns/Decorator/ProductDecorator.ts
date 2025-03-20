import { ProductProtocol } from "./ProductProtocol";

export class ProductDecorator implements ProductProtocol {
  private product: ProductProtocol;

  constructor(product: ProductProtocol) {
    this.product = product;
  }

  getPrice(): number {
    return this.product.getPrice();
  }

  getName(): string {
    return this.product.getName();
  }
}
