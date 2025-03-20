
export class Product {
  constructor(private readonly price: number, private readonly name: string) {}

  getPrice(): number {
    return this.price;
  }

  getName(): string {
    return this.name;
  }

}
