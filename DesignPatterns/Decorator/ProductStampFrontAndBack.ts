import { ProductDecorator } from "./ProductDecorator";

export class ProductStampFrontAndBack extends ProductDecorator {
  private price = 10;
  private name = 'Stamp';

  getPrice(): number {
    return this.getPrice() + this.price;
  }

  getName(): string {
    return `${this.getName()} with ${this.name}`;
  }
}
