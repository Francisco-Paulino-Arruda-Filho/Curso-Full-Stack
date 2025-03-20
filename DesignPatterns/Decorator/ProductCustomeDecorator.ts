import { ProductDecorator } from "./ProductDecorator";

export class ProductCustomeDecorator extends ProductDecorator {
  private price = 5;
  private name = 'Custome';

  getPrice(): number {
    return this.getPrice() + this.price;
  }

  getName(): string {
    return `${this.getName()} with ${this.name}`;
  }
}
