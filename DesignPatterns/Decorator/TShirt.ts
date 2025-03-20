export class TShirt {
  private price = 10;
  private name = 'T-Shirt';

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }
}
