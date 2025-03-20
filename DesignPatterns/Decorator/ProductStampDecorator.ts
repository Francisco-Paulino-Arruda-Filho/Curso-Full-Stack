import { ProductDecorator } from "./ProductDecorator";

export class ProductStampDecorator extends ProductDecorator {
  private price = 2;
  private name = 'Stamp';

  getPrice(): number {
    return this.getPrice() + this.price;
  }

  getName(): string {
    return `${this.getName()} with ${this.name}`;
  }
}
